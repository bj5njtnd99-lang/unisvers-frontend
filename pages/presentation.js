import Header from "../components/Header";

export default function Presentation() {
  return (
    <div>
      <Header />

      <main className="home-main page-presentation">

        {/* ===== HERO ===== */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Présentation · UnisVers Marseillan</p>

            <h2>Un espace commun pour comprendre la vie de la ville.</h2>

            <p className="hero-subtitle">
              UnisVers Marseillan est une plateforme citoyenne locale conçue pour
              rassembler, au même endroit, les informations essentielles de la
              vie communale&nbsp;: projets, sondages, idées citoyennes et
              actualités locales.
            </p>

            <p className="hero-footnote">
              L’objectif est de proposer une lecture claire et structurée de ce
              qui se fait, de ce qui se discute et de ce qui émerge dans la ville,
              dans un format accessible à toutes et tous.
            </p>
          </div>
        </section>

        {/* ===== INSTANCE LOCALE ===== */}
        <section className="home-section home-section-alt">
          <h3 className="section-title">UnisVers Marseillan</h3>

          <p className="section-intro">
            Cette instance est dédiée à la ville de Marseillan. Elle tient compte
            des réalités locales&nbsp;: vie à l’année, saison touristique,
            littoral, centre-ville, quartiers, mobilités et cadre de vie.
          </p>

          <div className="section-grid">
            <div className="section-card">
              <h4>Projets</h4>
              <p>
                Les projets présentés permettent de suivre les grandes actions
                et orientations pour la ville. Ils sont structurés pour être
                compréhensibles, consultables dans le temps et reliés aux
                priorités locales.
              </p>
            </div>

            <div className="section-card">
              <h4>Sondages</h4>
              <p>
                Les sondages offrent un moyen simple de recueillir l’avis des
                habitantes et habitants sur des sujets précis, afin de faire
                apparaître des tendances et des attentes collectives.
              </p>
            </div>

            <div className="section-card">
              <h4>Idées citoyennes</h4>
              <p>
                Les idées citoyennes permettent de formuler des propositions
                concrètes, des besoins ou des améliorations pour la vie
                quotidienne à Marseillan, sous une forme courte et lisible.
              </p>
            </div>
          </div>
        </section>

        {/* ===== ACTUALITÉS ===== */}
        <section className="home-section">
          <h3 className="section-title">Actualités locales</h3>

          <p className="section-intro">
            La plateforme centralise les informations utiles à la compréhension
            de la vie locale&nbsp;: annonces, réunions publiques, événements ou
            évolutions importantes. Les actualités sont consultables dans le
            temps afin de conserver une mémoire accessible de ce qui se passe
            dans la ville.
          </p>

          <div className="section-grid">
            <div className="section-card">
              <h4>Information claire</h4>
              <p>
                Les informations sont présentées de manière lisible et structurée,
                sans surcharge, afin de permettre une consultation rapide ou
                approfondie selon les besoins.
              </p>
            </div>

            <div className="section-card">
              <h4>Suivi dans la durée</h4>
              <p>
                Les actualités restent accessibles et archivées, ce qui permet
                de comprendre l’évolution des décisions, des projets et des
                événements dans le temps.
              </p>
            </div>
          </div>
        </section>

        {/* ===== PHILOSOPHIE ===== */}
        <section className="home-section home-section-alt">
          <h3 className="section-title">Une plateforme neutre et structurée</h3>

          <p className="section-intro">
            UnisVers est conçu comme une infrastructure d’information citoyenne.
            Ce n’est ni un réseau social, ni un outil de communication
            promotionnelle, mais un cadre commun pour organiser et lire les
            informations locales.
          </p>

          <div className="section-grid">
            <div className="section-card">
              <h4>Neutralité</h4>
              <p>
                La plateforme ne porte pas de message politique propre. Elle
                propose un cadre stable permettant la lecture des contenus quels
                que soient les acteurs qui les produisent.
              </p>
            </div>

            <div className="section-card">
              <h4>Lisibilité</h4>
              <p>
                Les contenus sont organisés par type et par thématique afin de
                faciliter la compréhension, même pour une personne qui découvre
                la plateforme pour la première fois.
              </p>
            </div>

            <div className="section-card">
              <h4>Mémoire collective</h4>
              <p>
                Les informations ne disparaissent pas avec le temps. Elles
                constituent une mémoire consultable de la vie de la ville,
                utile pour comprendre les évolutions et les priorités.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}