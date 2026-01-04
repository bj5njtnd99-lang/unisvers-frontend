import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { api } from "../../services/api";

export default function Projets() {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 connexion simple (à affiner plus tard)
  const isConnected =
    typeof window !== "undefined" &&
    localStorage.getItem("userToken");

  useEffect(() => {
    if (!isConnected) {
      setLoading(false);
      return;
    }

    api
      .get("/projets")
      .then((data) => setProjets(data || []))
      .finally(() => setLoading(false));
  }, [isConnected]);

  return (
    <div>
      <Header />

      <main className="home-main page-projets">
        {/* ===== HERO ===== */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Projets · Marseillan</p>

            <h2>Les projets pour la ville.</h2>

            <p className="hero-subtitle">
              Cette page rassemble les projets structurants liés à la vie
              de Marseillan&nbsp;: aménagements, équipements, cadre de vie
              et initiatives locales.
            </p>

            <div className="hero-actions">
              {isConnected ? (
                <Link href="/projets/proposer" className="btn btn-primary">
                  Proposer un projet
                </Link>
              ) : (
                <Link href="/compte" className="btn btn-primary">
                  Créer un compte pour participer
                </Link>
              )}

              <a href="#liste-projets" className="btn btn-ghost">
                Voir les projets
              </a>
            </div>

            <p className="hero-footnote">
              Un compte citoyen unique est requis pour consulter et proposer
              des projets.
            </p>
          </div>
        </section>

        {/* ===== LISTE DES PROJETS ===== */}
        <section className="home-section" id="liste-projets">
          <h3 className="section-title">Projets publiés</h3>

          {!isConnected && (
            <p>
              <Link href="/compte">
                Créez un compte pour accéder aux projets de la ville.
              </Link>
            </p>
          )}

          {loading && <p>Chargement des projets…</p>}

          {isConnected && !loading && projets.length === 0 && (
            <p>Aucun projet n’est disponible pour le moment.</p>
          )}

          {isConnected && !loading && projets.length > 0 && (
            <div className="section-grid">
              {projets.map((p) => (
                <article key={p.id} className="section-card">
                  <h4>{p.titre || "Projet sans titre"}</h4>

                  {p.description && <p>{p.description}</p>}

                  {typeof p.vues === "number" && (
                    <p className="section-meta section-meta-soft">
                      Consultations&nbsp;: {p.vues}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}