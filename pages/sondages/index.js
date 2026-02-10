import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "../../services/api";
import { useAuth } from "../../lib/useAuth";

export default function SondagesPage() {
  const { ready, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [sondages, setSondages] = useState([]);
  const [error, setError] = useState("");

  async function load() {
    setError("");
    setLoading(true);
    try {
      const data = await api.get("/sondages");
      setSondages(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e?.message || "Erreur chargement");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function vote(sondageId, optionLabel) {
    setError("");
    try {
      await api.voteSondage(sondageId, optionLabel);
      alert("Vote enregistré ✅");
    } catch (e) {
      if (e?.code === "AUTH_REQUIRED" || e?.status === 401) {
        alert("Tu dois être connecté pour voter.");
        return;
      }
      // 403 = déjà voté
      if (e?.status === 403) {
        alert("Tu as déjà voté sur ce sondage.");
        return;
      }
      alert(e?.message || "Erreur vote");
    }
  }

  return (
    <main style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Sondages</h1>

      {!ready ? (
        <p>Chargement…</p>
      ) : !isAuthenticated ? (
        <p style={{ marginBottom: 16 }}>
          Pour voter, tu dois être connecté.{" "}
          <Link href="/compte">Aller à “Compte”</Link>
        </p>
      ) : (
        <p style={{ marginBottom: 16 }}>Connecté ✅ Tu peux voter (1 fois par sondage).</p>
      )}

      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <button onClick={load}>Rafraîchir</button>
        <Link href="/sondages/proposer">Proposer un sondage</Link>
      </div>

      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}

      {loading ? <p>Chargement des sondages…</p> : null}

      {!loading && sondages.length === 0 ? (
        <p>Aucun sondage publié pour le moment.</p>
      ) : null}

      <div style={{ display: "grid", gap: 16 }}>
        {sondages.map((s) => (
          <section
            key={s.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>{s.question}</h2>

            <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
              {(s.options || []).map((o) => (
                <button
                  key={o.label}
                  onClick={() => vote(s.id, o.label)}
                  disabled={!isAuthenticated}
                  title={!isAuthenticated ? "Connecte-toi pour voter" : "Voter"}
                  style={{ padding: 10 }}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
