import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import Link from "next/link";

export default function ActualiteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [actualite, setActualite] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    api
      .get(`/actualites/${id}`)
      .then((data) => {
        setActualite(data || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <Header />

      <main className="home-main page-actualite-detail">
        {loading && <p>Chargement de l’actualité…</p>}

        {!loading && !actualite && (
          <p>Cette actualité n’existe pas ou n’est plus disponible.</p>
        )}

        {!loading && actualite && (
          <>
            {/* ===== EN-TÊTE ===== */}
            <section className="home-section">
              <p className="hero-kicker">Actualité · Marseillan</p>

              <h2>{actualite.titre || "Actualité"}</h2>

              <p className="section-meta">
                {actualite.publishedAt
                  ? new Date(actualite.publishedAt).toLocaleDateString("fr-FR")
                  : actualite.createdAt
                  ? new Date(actualite.createdAt).toLocaleDateString("fr-FR")
                  : ""}
              </p>
            </section>

            {/* ===== CONTENU ===== */}
            <section className="home-section home-section-alt">
              <div className="actualite-content">
                <p style={{ whiteSpace: "pre-line" }}>
                  {actualite.publishedContenu || actualite.contenu}
                </p>
              </div>
            </section>

            {/* ===== ACTIONS ===== */}
            <section className="home-section">
              <Link href="/actualites" className="btn btn-ghost">
                ← Retour aux actualités
              </Link>
            </section>
          </>
        )}
      </main>
    </div>
  );
}