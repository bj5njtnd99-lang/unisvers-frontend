import { useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import Link from "next/link";

export default function ProposerSondage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const updateOption = (index, value) => {
    const next = [...options];
    next[index] = value;
    setOptions(next);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const handleSubmit = async () => {
    const cleanQuestion = question.trim();
    const cleanOptions = options.map(o => o.trim()).filter(Boolean);

    if (!cleanQuestion || cleanOptions.length < 2) {
      setMessage("Merci de formuler une question et au moins deux réponses.");
      return;
    }

    setSending(true);
    setMessage("");

    try {
      await api.post("/sondages", {
        question: cleanQuestion,
        options: cleanOptions,
      });

      setQuestion("");
      setOptions(["", ""]);
      setMessage("Votre proposition de sondage est en attente de validation.");
    } catch (e) {
      setMessage("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <Header />

      <main className="home-main page-proposer-sondage">
        {/* ===== HERO ===== */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Sondage · Marseillan</p>

            <h2>Proposer un sondage citoyen</h2>

            <p className="hero-subtitle">
              Vous pouvez proposer une question simple afin de recueillir
              l’avis des habitantes et habitants. Les sondages sont relus
              avant publication.
            </p>

            <p className="hero-footnote">
              Les réponses doivent être claires, neutres et compréhensibles
              par tous.
            </p>
          </div>
        </section>

        {/* ===== FORMULAIRE ===== */}
        <section className="home-section">
          <h3 className="section-title">Votre question</h3>

          <div className="idee-form">
            <textarea
              rows={2}
              placeholder="Exemple : Faut-il piétonniser le centre-ville le week-end ?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <h4 className="section-title">Réponses proposées</h4>

            {options.map((opt, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={`Réponse ${idx + 1}`}
                value={opt}
                onChange={(e) => updateOption(idx, e.target.value)}
              />
            ))}

            <button
              className="btn btn-ghost"
              type="button"
              onClick={addOption}
            >
              + Ajouter une réponse
            </button>

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? "Envoi en cours…" : "Soumettre le sondage"}
            </button>

            {message && (
              <p className="info-message info-message-pending">
                {message}
              </p>
            )}

            <p className="section-meta section-meta-soft">
              Les sondages sont publiés après validation afin de garantir
              une consultation équilibrée et pertinente.
            </p>
          </div>
        </section>

        {/* ===== RETOUR ===== */}
        <section className="home-section">
          <Link href="/sondages" className="btn btn-ghost">
            ← Retour aux sondages
          </Link>
        </section>
      </main>
    </div>
  );
}