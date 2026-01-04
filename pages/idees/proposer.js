import { useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import Link from "next/link";

export default function ProposerIdee() {
  const [texte, setTexte] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const clean = texte.trim();
    if (!clean) {
      setMessage("Merci de formuler votre idée avant l’envoi.");
      return;
    }

    setSending(true);
    setMessage("");

    try {
      await api.post("/idees", { texte: clean });
      setTexte("");
      setMessage("Votre proposition est en attente de validation.");
    } catch (e) {
      setMessage("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <Header />

      <main className="home-main page-proposer">
        {/* HERO */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Proposer une idée · Marseillan</p>

            <h2>Partager une idée citoyenne</h2>

            <p className="hero-subtitle">
              Une idée, une suggestion, un besoin concret : formulez-la en une
              phrase claire. Toutes les propositions sont relues avant
              publication.
            </p>

            <div className="hero-actions">
              <Link href="/idees" className="btn btn-ghost">
                ← Retour aux idées publiées
              </Link>
            </div>
          </div>
        </section>

        {/* FORMULAIRE */}
        <section className="home-section">
          <h3 className="section-title">Votre idée</h3>

          <div className="idee-form">
            <textarea
              rows={4}
              placeholder="Exemple : Créer plus d’espaces ombragés près du port."
              value={texte}
              onChange={(e) => setTexte(e.target.value)}
            />

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? "Envoi en cours…" : "Soumettre l’idée"}
            </button>

            {message && (
              <p className="info-message info-message-pending">
                {message}
              </p>
            )}

            <p className="section-meta section-meta-soft">
              Les idées sont visibles publiquement uniquement après validation
              par l’administration.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}