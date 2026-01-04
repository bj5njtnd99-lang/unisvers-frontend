import { useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import Link from "next/link";

export default function ProposerProjet() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!titre.trim() || !description.trim()) {
      setMessage("Merci de renseigner un titre et une description.");
      return;
    }

    setSending(true);
    setMessage("");

    try {
      await api.post("/projets", {
        titre: titre.trim(),
        description: description.trim(),
      });

      setTitre("");
      setDescription("");
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

      <main className="home-main page-projets-proposer">
        {/* ===== HERO ===== */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Proposer un projet · Marseillan</p>

            <h2>Proposer un projet pour la ville</h2>

            <p className="hero-subtitle">
              Vous pouvez soumettre ici une idée de projet&nbsp;:
              aménagement, service, initiative locale ou amélioration du
              cadre de vie.  
              Chaque proposition est relue avant publication.
            </p>

            <p className="hero-footnote">
              Les projets validés deviennent visibles publiquement et peuvent
              être suivis dans le temps.
            </p>
          </div>
        </section>

        {/* ===== FORMULAIRE ===== */}
        <section className="home-section">
          <h3 className="section-title">Formulaire de proposition</h3>

          <div className="idee-form">
            <input
              type="text"
              placeholder="Titre du projet"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />

            <textarea
              rows={5}
              placeholder="Décrivez le projet : objectif, lieu, utilité, bénéficiaires…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? "Envoi en cours…" : "Soumettre le projet"}
            </button>

            {message && (
              <p className="info-message info-message-pending">
                {message}
              </p>
            )}
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/projets" className="btn btn-ghost">
              ← Retour aux projets
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}