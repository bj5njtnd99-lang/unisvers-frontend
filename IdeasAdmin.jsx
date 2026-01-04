import React, { useEffect, useState } from "react";
import { api } from "../services/api.js";

export default function IdeasAdmin() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadIdeas();
  }, []);

  const loadIdeas = async () => {
    setLoading(true);
    try {
      const data = await api.get("/idees");
      setIdeas(data || []);
    } catch (e) {
      console.error("Erreur chargement idées", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-panel">
      <h2>Idées citoyennes</h2>
      <p className="panel-help-text">
        Liste des idées proposées par les habitants, classées par date.
        Ces données servent à identifier les priorités émergentes.
      </p>

      {loading && <p>Chargement des idées…</p>}

      {!loading && ideas.length === 0 && (
        <p>Aucune idée citoyenne n’a encore été soumise.</p>
      )}

      {!loading && ideas.length > 0 && (
        <div className="admin-ideas-list">
          {ideas
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((idea) => (
              <div key={idea.id} className="admin-idea-card">
                <p className="admin-idea-text">{idea.texte}</p>

                <div className="admin-idea-meta">
                  <span>
                    {new Date(idea.date).toLocaleDateString("fr-FR")}
                  </span>
                  {idea.tags && idea.tags.length > 0 && (
                    <span>Tags : {idea.tags.join(", ")}</span>
                  )}
                  {typeof idea.score === "number" && (
                    <span>Score : {idea.score}</span>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}