import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import Link from "next/link";

function SondageCard({ sondage, isConnected }) {
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("userToken")
      : null;

  const handleVote = async () => {
    if (!isConnected || !userId) {
      setMessage("Veuillez créer un compte pour participer.");
      return;
    }

    if (!selected) {
      setMessage("Merci de choisir une réponse avant de voter.");
      return;
    }

    if (hasVoted) {
      setMessage("Vous avez déjà voté à ce sondage.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await api.post(`/sondages/${sondage.id}/vote`, {
        option: selected,
        userId,
      });

      setHasVoted(true);
      setMessage("Votre vote a bien été pris en compte.");
    } catch (e) {
      if (e?.status === 403) {
        setHasVoted(true);
        setMessage("Vous avez déjà voté à ce sondage.");
      } else {
        setMessage("Votre vote a bien été pris en compte.");
      }
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
                  disabled={!isConnected || loading || hasVoted}
                />
                <span className="sondage-label">
                  {opt.label}
                </span>
              </label>
            </li>
          ))}
      </ul>

      <button
        className="btn btn-primary"
        onClick={handleVote}
        disabled={loading || !isConnected || hasVoted}
      >
        {hasVoted
          ? "Vote enregistré"
          : loading
          ? "Envoi en cours..."
          : "Voter"}
      </button>

      {!isConnected && (
        <p className="info-message">
          <Link href="/compte">
            Créer un compte pour participer aux sondages
          </Link>
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
    typeof window !== "undefined" &&
    localStorage.getItem("userToken");

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
      .finally(() => setLoading(false));
  }, [isConnected]);

  return (
    <div>
      <Header />

      <main className="home-main page-sondages">
        {/* ===== HERO ===== */}
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

        {/* ===== LISTE DES SONDAGES ===== */}
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
                <SondageCard
                  key={s.id}
                  sondage={s}
                  isConnected={isConnected}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
