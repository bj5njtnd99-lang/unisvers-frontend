import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { api } from "../../services/api";

export default function Actualites() {
  const [actuList, setActuList] = useState([]);
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
      .get("/actualites")
      .then((data) => {
        const sorted = (data || []).sort(
          (a, b) =>
            new Date(b.publishedAt || b.createdAt) -
            new Date(a.publishedAt || a.createdAt)
        );
        setActuList(sorted);
      })
      .finally(() => setLoading(false));
  }, [isConnected]);

  const featured = actuList[0];
  const others = actuList.slice(1);

  return (
    <div>
      <Header />

      <main className="home-main page-actualites">
        {/* ===== HERO ===== */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Actualités · Marseillan</p>

            <h2>Suivre l’actualité locale.</h2>

            <p className="hero-subtitle">
              Cette page rassemble les informations publiées sur la plateforme&nbsp;:
              annonces, événements, communications locales et éléments utiles
              à la compréhension de la vie municipale.
            </p>

            <div className="hero-actions">
              {isConnected ? (
                <Link href="/actualites/proposer" className="btn btn-primary">
                  Proposer une actualité
                </Link>
              ) : (
                <Link href="/compte" className="btn btn-primary">
                  Créer un compte pour participer
                </Link>
              )}

              <a href="#liste-actualites" className="btn btn-ghost">
                Voir les actualités
              </a>
            </div>

            <p className="hero-footnote">
              Les actualités sont relues et validées avant publication.
            </p>
          </div>
        </section>

        {/* ===== LISTE DES ACTUALITÉS ===== */}
        <section
          className="home-section home-section-alt"
          id="liste-actualites"
        >
          <h3 className="section-title">Actualités publiées</h3>

          {!isConnected && (
            <p>
              <Link href="/compte">
                Créez un compte pour consulter et proposer des actualités.
              </Link>
            </p>
          )}

          {loading && <p>Chargement des actualités…</p>}

          {isConnected && !loading && actuList.length === 0 && (
            <p>Aucune actualité n’est disponible pour le moment.</p>
          )}

          {/* ===== À LA UNE ===== */}
          {isConnected && !loading && featured && (
            <article className="section-card actu-featured">
              <p className="section-meta section-meta-soft">
                À la une ·{" "}
                {featured.publishedAt
                  ? new Date(featured.publishedAt).toLocaleDateString("fr-FR")
                  : "Date inconnue"}
              </p>

              <h4>{featured.titre || "Actualité"}</h4>

              {featured.publishedContenu && (
                <p>
                  {featured.publishedContenu.length > 300
                    ? featured.publishedContenu.slice(0, 300) + "…"
                    : featured.publishedContenu}
                </p>
              )}

              <Link
                href={`/actualites/${featured.id}`}
                className="card-link"
              >
                Lire l’actualité complète
              </Link>
            </article>
          )}

          {/* ===== AUTRES ACTUALITÉS ===== */}
          {isConnected && !loading && others.length > 0 && (
            <div className="cards-list">
              {others.map((a) => {
                const dateLabel = a.publishedAt
                  ? new Date(a.publishedAt).toLocaleDateString("fr-FR")
                  : a.createdAt
                  ? new Date(a.createdAt).toLocaleDateString("fr-FR")
                  : "Date inconnue";

                const extrait =
                  a.publishedContenu && a.publishedContenu.length > 160
                    ? a.publishedContenu.slice(0, 160) + "…"
                    : a.publishedContenu || "";

                return (
                  <article key={a.id} className="card-item actu-card">
                    <h4>{a.titre || "Actualité"}</h4>
                    <p className="section-meta">{dateLabel}</p>

                    {extrait && <p>{extrait}</p>}

                    <Link
                      href={`/actualites/${a.id}`}
                      className="card-link"
                    >
                      Lire en détail
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}