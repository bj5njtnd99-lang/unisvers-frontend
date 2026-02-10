import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import Link from "next/link";

/**
 * Stockage local "déjà voté" (UI) :
 * - clé par utilisateur (userToken)
 * - map { [sondageId]: { option, at } }
 */
function getUserToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("userToken");
}

function votedStorageKey(userToken) {
  return `unisvers_voted_sondages::${userToken}`;
}

function readVotedMap(userToken) {
  if (typeof window === "undefined") return {};
  if (!userToken) return {};
  try {
    const raw = localStorage.getItem(votedStorageKey(userToken));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeVotedMap(userToken, map) {
  if (typeof window === "undefined") return;
  if (!userToken) return;
  try {
    localStorage.setItem(votedStorageKey(userToken), JSON.stringify(map));
  } catch {}
}

function hasVoted(userToken, sondageId) {
  const map = readVotedMap(userToken);
  return Boolean(map[String(sondageId)]);
}

function markVoted(userToken, sondageId, option) {
  const map = readVotedMap(userToken);
  map[String(sondageId)] = { option: option || null, at: new Date().toISOString() };
  writeVotedMap(userToken, map);
}

function SondageCard({ sondage, isConnected }) {
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasVotedState, setHasVotedState] = useState(false);

  const userToken = useMemo(() => getUserToken(), []);
  const userId = userToken; // ton backend actuel attend userId dans le body

  // ✅ Au montage: si on a déjà voté (persisté), on reste en mode "déjà voté"
  useEffect(() => {
    if (!isConnected || !userToken) {
      setHasVotedState(false);
      return;
    }
    const voted = hasVoted(userToken, sondage.id);
    setHasVotedState(voted);
    if (voted) setMessage("✅ Votre vote a bien été pris en compte.");
  }, [isConnected, userToken, sondage.id]);

  const handleVote = async () => {
    if (!isConnected || !userId) {
      setMessage("Veuillez créer un compte pour participer.");
      return;
    }

    if (!selected) {
      setMessage("Merci de choisir une réponse avant de voter.");
      return;
    }

    // ✅ Bloque aussi après retour sur page (persisté)
    if (hasVoted(userToken, sondage.id) || hasVotedState) {
      setHasVotedState(true);
      setMessage("✅ Votre vote a bien été pris en compte.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await api.post(`/sondages/${sondage.id}/vote`, {
        option: selected,
        userId,
      });

      // ✅ Persiste le vote pour que ça reste après retour / reload
      markVoted(userToken, sondage.id, selected);

      setHasVotedState(true);
      setMessage("✅ Votre vote a bien été pris en compte.");
    } catch (e) {
      // Si le backend refuse (déjà voté), on aligne l'UI
      if (e?.status === 403) {
        markVoted(userToken, sondage.id, null);
        setHasVotedState(true);
        setMessage("✅ Votre vote a bien été pris en compte.");
        return;
      }

      // Erreur réelle
      setMessage("Une erreur est survenue, veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="section-card">
      <h4>{sondage.question || "Sondage sans titre"}</h4>

      <ul className="sondage-options">
        {Array.isArray(sondage.options) &&
          sondage.options.map((opt, idx) => (
            <li key={idx}>
              <label>
                <input
                  type="radio"
                  name={`sondage-${sondage.id}`}
                  value={opt.label}
                  onChange={() => setSelected(opt.label)}
                  disabled={!isConnected || loading || hasVotedState}
                />
                <span className="sondage-label">{opt.label}</span>
              </label>
            </li>
          ))}
      </ul>

      <button
        className="btn btn-primary"
        onClick={handleVote}
        disabled={loading || !isConnected || hasVotedState}
      >
        {hasVotedState ? "Vote enregistré" : loading ? "Envoi en cours..." : "Voter"}
      </button>

      {!isConnected && (
        <p className="info-message">
          <Link href="/compte">Créer un compte pour participer aux sondages</Link>
        </p>
      )}

      {message && <p className="info-message">{message}</p>}
    </article>
  );
}

export default function Sondages() {
  const [sondages, setSondages] = useState([]);
  const [loading, setLoading] = useState(true);

  const isConnected =
    typeof window !== "undefined" && Boolean(localStorage.getItem("userToken"));

  useEffect(() => {
    if (!isConnected) {
      setLoading(false);
      return;
    }

    api
      .get("/sondages")
      .then((data) => {
        setSondages(data || []);
      })
      .catch(() => {
        setSondages([]);
      })
      .finally(() => setLoading(false));
  }, [isConnected]);

  return (
    <div>
      <Header />

      <main className="home-main page-sondages">
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Sondages · Marseillan</p>

            <h2>Exprimer son avis simplement.</h2>

            <p className="hero-subtitle">
              Les sondages permettent de faire émerger des tendances collectives
              à partir de questions claires et accessibles.
            </p>

            <div className="hero-actions">
              {isConnected ? (
                <Link href="/sondages/proposer" className="btn btn-primary">
                  Proposer un sondage
                </Link>
              ) : (
                <Link href="/compte" className="btn btn-primary">
                  Créer un compte pour participer
                </Link>
              )}

              <a href="#liste-sondages" className="btn btn-ghost">
                Voir les sondages
              </a>
            </div>

            <p className="hero-footnote">
              Un compte citoyen unique est requis pour participer.
            </p>
          </div>
        </section>

        <section className="home-section" id="liste-sondages">
          <h3 className="section-title">Sondages disponibles</h3>

          {!isConnected && (
            <p>
              <Link href="/compte">
                Créez un compte pour consulter et participer aux sondages.
              </Link>
            </p>
          )}

          {loading && <p>Chargement des sondages…</p>}

          {isConnected && !loading && sondages.length === 0 && (
            <p>Aucun sondage n’est disponible pour le moment.</p>
          )}

          {isConnected && !loading && sondages.length > 0 && (
            <div className="section-grid">
              {sondages.map((s) => (
                <SondageCard key={s.id} sondage={s} isConnected={isConnected} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
