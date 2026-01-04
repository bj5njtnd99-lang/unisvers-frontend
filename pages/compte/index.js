import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";

/**
 * Page Compte — Création & Connexion
 * Méthode Anchor Hash (unicité sans identité)
 */
export default function Compte() {
  const [step, setStep] = useState("intro");
  // intro | consent | create | done

  const [accepted, setAccepted] = useState(false);
  const [token, setToken] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  /* ===============================
     1. Génération du contexte local
     =============================== */
  function generateContext() {
    const now = new Date();
    const timeWindow = Math.floor(now.getTime() / (10 * 60 * 1000)); // 10 min

    return {
      ua: navigator.userAgent,
      screen: `${window.screen.width}x${window.screen.height}`,
      lang: navigator.language,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      t: timeWindow,
      instance: "unisvers-marseillan",
    };
  }

  /* ===============================
     2. Demande du jeton consommable
     =============================== */
  async function requestToken() {
    setLoading(true);
    setMessage("");

    try {
      const context = generateContext();

      const res = await api.post("/auth/token", context);

      setToken(res.token);
      setStep("create");
    } catch (e) {
      setMessage("Impossible de générer l’accès. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  /* ===============================
     3. Création du compte
     =============================== */
  async function createAccount() {
    if (!pseudo || !password || !token) {
      setMessage("Merci de remplir tous les champs.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await api.post("/auth/create", {
        pseudo,
        password,
        token,
      });

      localStorage.setItem("userToken", "ok");
      setStep("done");
    } catch (e) {
      setMessage(
        "Création refusée. Un compte existe peut-être déjà depuis cet environnement."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />

      <main className="home-main page-compte">
        {/* ================= INTRO ================= */}
        {step === "intro" && (
          <section className="hero-main">
            <div className="hero-text">
              <p className="hero-kicker">Compte citoyen · UnisVers</p>

              <h2>Créer un compte citoyen unique.</h2>

              <p className="hero-subtitle">
                UnisVers repose sur un principe simple :
                <br />
                <strong>une personne = un compte</strong>, sans collecte
                de données personnelles.
              </p>

              <p className="hero-footnote">
                Aucun email. Aucun numéro. Aucun identifiant civil.
              </p>

              <button
                className="btn btn-primary"
                onClick={() => setStep("consent")}
              >
                Continuer
              </button>
            </div>
          </section>
        )}

        {/* ================= CONSENTEMENT ================= */}
        {step === "consent" && (
          <section className="home-section">
            <h3 className="section-title">
              Consentement & principe d’unicité
            </h3>

            <ul className="list-soft">
              <li>Un seul compte peut être créé par personne.</li>
              <li>Le compte est personnel et protégé par mot de passe.</li>
              <li>Aucune donnée personnelle n’est collectée.</li>
              <li>Le système empêche uniquement la répétition de création.</li>
            </ul>

            <label className="checkbox-line">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span>
                Je comprends et j’accepte ces conditions spécifiques.
              </span>
            </label>

            <button
              className="btn btn-primary"
              disabled={!accepted || loading}
              onClick={requestToken}
            >
              {loading ? "Génération…" : "Générer mon accès"}
            </button>

            {message && <p className="info-message">{message}</p>}
          </section>
        )}

        {/* ================= CRÉATION ================= */}
        {step === "create" && (
          <section className="home-section">
            <h3 className="section-title">Création du compte</h3>

            <div className="idee-form">
              <label>
                Jeton temporaire
                <input type="text" value={token} readOnly />
              </label>

              <label>
                Pseudonyme
                <input
                  type="text"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                />
              </label>

              <label>
                Mot de passe
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <button
                className="btn btn-primary"
                onClick={createAccount}
                disabled={loading}
              >
                {loading ? "Création…" : "Créer mon compte"}
              </button>

              {message && <p className="info-message">{message}</p>}
            </div>
          </section>
        )}

        {/* ================= TERMINÉ ================= */}
        {step === "done" && (
          <section className="hero-main">
            <div className="hero-text">
              <h2>Compte créé.</h2>

              <p className="hero-subtitle">
                Votre compte citoyen est actif.
              </p>

              <a href="/" className="btn btn-primary">
                Accéder à la plateforme
              </a>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}