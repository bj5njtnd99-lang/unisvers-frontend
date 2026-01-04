import { useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import Link from "next/link";

export default function ProposerActualite() {
  const [titre, setTitre] = useState("");
  const [contenu, setContenu] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const cleanTitre = titre.trim();
    const cleanContenu = contenu.trim();

    if (!cleanTitre || !cleanContenu) {
      setMessage("Merci de renseigner un titre et un contenu.");
      return;
    }

    setSending(true);
    setMessage("");

    try {
      await api.post("/actualites", {
        titre: cleanTitre,
        contenu: cleanContenu,
      });

      setTitre("");
      setContenu("");
      setMessage(
        "Merci, votre actualité a bien été envoyée et est en attente de validation."
      );
    } catch (e) {
      setMessage(
        "Une erreur est survenue lors de l’envoi. Merci de réessayer plus tard."
      );
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
            <p className="hero-kicker">Actualités · Marseillan</p>

            <h2>Proposer une actualité locale</h2>

            <p className="hero-subtitle">
              Vous pouvez proposer une information locale utile à la vie
              collective : réunion publique, événement, chantier, annonce
              associative ou citoyenne.
            </p>

            <p className="hero-footnote">
              Les actualités sont relues par l’équipe avant publication afin de
              garantir une information fiable et respectueuse.
            </p>
          </div>
        </section>

        {/* FORMULAIRE */}
        <section className="home-section">
          <h3 className="section-title">Nouvelle actualité</h3>

          <div className="admin-form">
            <label>Titre de l’actualité</label>
            <input
              type="text"
              placeholder="Exemple : Réunion publique sur le stationnement"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />

            <label>Contenu</label>
            <textarea
              rows={6}
              placeholder="Décrivez l’information de manière claire et factuelle."
              value={contenu}
              onChange={(e) => setContenu(e.target.value)}
            />

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? "Envoi en cours…" : "Envoyer l’actualité"}
            </button>

            {message && <p className="info-message">{message}</p>}
          </div>

          <p className="section-meta section-meta-soft">
            Les actualités publiées apparaîtront dans l’onglet « Actualités »
            après validation par l’administration.
          </p>

          <Link href="/actualites" className="btn btn-ghost">
            ← Retour aux actualités
          </Link>
        </section>
      </main>
    </div>
  );
}