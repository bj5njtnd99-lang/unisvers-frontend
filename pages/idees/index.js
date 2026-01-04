import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import SearchBar from "../../components/SearchBar";
import Link from "next/link";

export default function Idees() {
  const [idees, setIdees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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
      .get("/idees")
      .then((data) => {
        setIdees(data || []);
      })
      .finally(() => setLoading(false));
  }, [isConnected]);

  const filtered =
    idees && idees.length
      ? idees.filter((i) => {
          const t = (i.texte || "").toLowerCase();
          const q = (search || "").toLowerCase();
          const tags = Array.isArray(i.tags)
            ? i.tags.join(" ").toLowerCase()
            : "";
          return t.includes(q) || tags.includes(q);
        })
      : [];

  return (
    <div>
      <Header />

      <main className="home-main page-idees">
        {/* ===== HERO ===== */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Idées citoyennes · Marseillan</p>

            <h2>Les idées citoyennes.</h2>

            <p className="hero-subtitle">
              Cette page rassemble les idées rendues visibles par les habitantes
              et habitants. Elles permettent de faire émerger, de manière
              lisible, les sujets qui comptent dans la vie quotidienne
              de la commune.
            </p>

            <div className="hero-actions">
              {isConnected ? (
                <Link href="/idees/proposer" className="btn btn-primary">
                  Proposer une idée
                </Link>
              ) : (
                <Link href="/compte" className="btn btn-primary">
                  Créer un compte pour participer
                </Link>
              )}

              <a href="#liste-idees" className="btn btn-ghost">
                Voir les idées
              </a>
            </div>

            <p className="hero-footnote">
              Un compte citoyen unique est requis pour consulter et proposer
              des idées.
            </p>
          </div>
        </section>

        {/* ===== LISTE DES IDÉES ===== */}
        <section className="home-section home-section-alt" id="liste-idees">
          <h3 className="section-title">Idées publiées</h3>

          {!isConnected && (
            <p>
              <Link href="/compte">
                Créez un compte pour consulter et proposer des idées.
              </Link>
            </p>
          )}

          <SearchBar onSearch={setSearch} />

          {loading && <p>Chargement des idées…</p>}

          {isConnected && !loading && filtered.length === 0 && (
            <p>Aucune idée n’est disponible pour le moment.</p>
          )}

          {isConnected && !loading && filtered.length > 0 && (
            <div className="cards-list">
              {filtered.map((i) => {
                const dateLabel = i.createdAt
                  ? new Date(i.createdAt).toLocaleDateString("fr-FR")
                  : "Date inconnue";

                const tags =
                  Array.isArray(i.tags) && i.tags.length
                    ? i.tags.join(", ")
                    : "Non classée";

                return (
                  <article key={i.id} className="card-item idee-card">
                    <p>{i.texte}</p>
                    <p className="section-meta">
                      {dateLabel} · Tags : {tags} · Score :{" "}
                      {typeof i.score === "number" ? i.score : "—"}
                    </p>
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