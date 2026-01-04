import Header from "../components/Header";

export default function MentionsLegales() {
  return (
    <div>
      <Header />

      <main className="home-main">
        {/* ===== HERO MENTIONS LÉGALES ===== */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Informations légales</p>

            <h2>Mentions légales – UnisVers Marseillan</h2>

            <p className="hero-subtitle">
              Conformément aux dispositions des articles 6-III et 19 de la loi
              n°2004-575 du 21 juin 2004 pour la confiance dans l’économie
              numérique (LCEN), la présente page précise les informations
              légales relatives au site UnisVers Marseillan.
            </p>

            <p className="hero-footnote">
              UnisVers Marseillan est une instance locale de la plateforme
              citoyenne UnisVers, conçue comme une infrastructure numérique
              d’information et de participation.
            </p>
          </div>
        </section>

        {/* ===== 1. ÉDITEUR ===== */}
        <section className="home-section">
          <h3 className="section-title">1. Éditeur du site</h3>

          <div className="section-grid">
            <div className="section-card">
              <h4>Plateforme</h4>
              <p>
                Le site <strong>UnisVers Marseillan</strong> est une plateforme
                citoyenne permettant la consultation de projets, d’actualités,
                de sondages et d’idées locales.
              </p>
            </div>

            <div className="section-card">
              <h4>Conception & infrastructure</h4>
              <p>
                La conception, l’architecture logicielle et le socle technique
                de la plateforme UnisVers sont assurés par&nbsp;:
              </p>
              <p>
                <strong>Infinity8.org</strong><br />
                Structure éditrice et conceptrice du Core UnisVers.
              </p>
            </div>

            <div className="section-card">
              <h4>Responsabilité éditoriale</h4>
              <p>
                Les contenus publiés sur l’instance UnisVers Marseillan
                (projets, idées, sondages, actualités) engagent la responsabilité
                de l’entité ou des personnes qui exploitent cette instance locale.
              </p>
              <p>
                La plateforme UnisVers constitue un cadre technique et
                informationnel, sans orientation politique propre.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 2. HÉBERGEMENT ===== */}
        <section className="home-section">
          <h3 className="section-title">2. Hébergement</h3>

          <div className="section-grid">
            <div className="section-card">
              <h4>Prestataire d’hébergement</h4>
              <p>
                Le site est hébergé par un prestataire situé sur le territoire
                de l’Union européenne, garantissant un niveau de sécurité
                conforme aux standards en vigueur.
              </p>
              <p>
                Les informations précises concernant l’hébergeur (raison
                sociale, adresse, contact) sont tenues à disposition sur
                demande légale ou administrative.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 3. PROPRIÉTÉ INTELLECTUELLE ===== */}
        <section className="home-section">
          <h3 className="section-title">3. Propriété intellectuelle</h3>

          <div className="section-grid">
            <div className="section-card">
              <h4>Structure et code</h4>
              <p>
                La structure du site, son interface, ainsi que les composants
                logiciels du Core UnisVers sont protégés par le droit de la
                propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, adaptation ou réutilisation du code ou de
                l’architecture sans autorisation préalable est interdite.
              </p>
            </div>

            <div className="section-card">
              <h4>Contenus</h4>
              <p>
                Les contenus publiés sur l’instance locale (textes, projets,
                idées, sondages, actualités) restent la propriété de leurs
                auteurs ou de l’entité éditrice de l’instance.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 4. DONNÉES PERSONNELLES ===== */}
        <section className="home-section">
          <h3 className="section-title">4. Données personnelles</h3>

          <div className="section-grid">
            <div className="section-card">
              <h4>Principe général</h4>
              <p>
                La plateforme UnisVers est conçue selon un principe de
                minimisation des données.
              </p>
              <p>
                Aucune donnée personnelle directement identifiante
                (nom, prénom, email, numéro de téléphone) n’est requise pour
                l’utilisation du service.
              </p>
            </div>

            <div className="section-card">
              <h4>Finalité</h4>
              <p>
                Les données traitées le sont exclusivement afin d’assurer le
                fonctionnement de la plateforme et de produire des analyses
                globales et anonymisées des contributions citoyennes.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 5. LIMITATION DE RESPONSABILITÉ ===== */}
        <section className="home-section">
          <h3 className="section-title">5. Limitation de responsabilité</h3>

          <div className="section-grid">
            <div className="section-card">
              <h4>Information</h4>
              <p>
                Les informations présentées sur UnisVers Marseillan ne se
                substituent pas aux communications officielles des autorités
                publiques.
              </p>
            </div>

            <div className="section-card">
              <h4>Évolution du service</h4>
              <p>
                La plateforme peut évoluer, être mise à jour ou adaptée afin
                d’améliorer son fonctionnement ou de répondre à des exigences
                légales ou techniques.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}