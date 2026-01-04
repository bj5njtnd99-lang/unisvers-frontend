import Header from "../components/Header";

export default function ConditionsUtilisation() {
  return (
    <div>
      <Header />

      <main className="home-main">
        {/* HERO CGU */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Conditions d’utilisation</p>

            <h2>Conditions d’utilisation d’UnisVers Marseillan</h2>

            <p className="hero-subtitle">
              Les présentes conditions définissent les règles d’accès et
              d’utilisation de la plateforme citoyenne UnisVers Marseillan.
              Toute navigation ou contribution implique l’acceptation pleine
              et entière de ces conditions.
            </p>

            <p className="hero-footnote">
              UnisVers Marseillan est une instance locale de la plateforme
              UnisVers, conçue et structurée par Infinity8.org comme
              infrastructure citoyenne neutre.
            </p>
          </div>
        </section>

        {/* 1. OBJET */}
        <section className="home-section">
          <h3 className="section-title">1. Objet de la plateforme</h3>

          <div className="section-grid">
            <article className="section-card">
              <h4>Finalité</h4>
              <p>
                UnisVers Marseillan a pour objet de permettre aux habitantes
                et habitants d’un territoire de :
              </p>
              <ul>
                <li>consulter des projets et des actualités locales,</li>
                <li>participer à des sondages citoyens,</li>
                <li>proposer des idées et contributions.</li>
              </ul>
              <p>
                La plateforme vise à améliorer la lisibilité de la vie locale
                et la compréhension des priorités collectives.
              </p>
            </article>

            <article className="section-card">
              <h4>Nature de l’outil</h4>
              <p>
                UnisVers est un outil de participation et d’information
                citoyenne. Il ne constitue ni un service administratif
                officiel, ni un outil de communication institutionnelle
                obligatoire.
              </p>
            </article>
          </div>
        </section>

        {/* 2. ACCÈS AU SERVICE */}
        <section className="home-section">
          <h3 className="section-title">2. Accès au service</h3>

          <div className="section-grid">
            <article className="section-card">
              <h4>Accès libre</h4>
              <p>
                L’accès aux contenus publiés (projets, sondages, idées,
                actualités) est libre et gratuit.
              </p>
              <p>
                Certaines fonctionnalités de contribution peuvent nécessiter
                une identification ou une validation afin de garantir le bon
                fonctionnement du service.
              </p>
            </article>

            <article className="section-card">
              <h4>Disponibilité</h4>
              <p>
                Le service est accessible en continu, sous réserve
                d’interruptions nécessaires à la maintenance, à la sécurité
                ou à des contraintes techniques.
              </p>
            </article>
          </div>
        </section>

        {/* 3. UTILISATION ACCEPTABLE */}
        <section className="home-section">
          <h3 className="section-title">3. Utilisation acceptable</h3>

          <div className="section-grid">
            <article className="section-card">
              <h4>Comportement attendu</h4>
              <p>
                L’utilisateur s’engage à utiliser la plateforme de manière
                respectueuse, loyale et conforme aux lois en vigueur.
              </p>
              <p>
                Les contributions doivent rester courtoises, constructives
                et en lien avec la vie locale.
              </p>
            </article>

            <article className="section-card">
              <h4>Contenus interdits</h4>
              <p>
                Sont notamment interdits les contenus :
              </p>
              <ul>
                <li>diffamatoires, injurieux ou haineux,</li>
                <li>discriminatoires ou incitant à la violence,</li>
                <li>contraires à l’ordre public ou à la loi.</li>
              </ul>
            </article>

            <article className="section-card">
              <h4>Usage abusif</h4>
              <p>
                Toute tentative de perturbation du service (spam,
                automatisation abusive, atteinte à la sécurité) est
                strictement interdite.
              </p>
            </article>
          </div>
        </section>

        {/* 4. RESPONSABILITÉS */}
        <section className="home-section">
          <h3 className="section-title">4. Responsabilités</h3>

          <div className="section-grid">
            <article className="section-card">
              <h4>Responsabilité de l’utilisateur</h4>
              <p>
                Chaque utilisateur demeure responsable des contenus qu’il
                publie et des conséquences pouvant en découler.
              </p>
            </article>

            <article className="section-card">
              <h4>Responsabilité de la plateforme</h4>
              <p>
                UnisVers Marseillan met à disposition un outil technique
                permettant la publication et la consultation de contenus
                citoyens.
              </p>
              <p>
                La plateforme ne saurait être tenue responsable de l’exactitude
                ou de l’exhaustivité des contenus publiés par les utilisateurs.
              </p>
            </article>
          </div>
        </section>

        {/* 5. ÉVOLUTION */}
        <section className="home-section">
          <h3 className="section-title">5. Évolution des conditions</h3>

          <div className="section-grid">
            <article className="section-card">
              <h4>Mises à jour</h4>
              <p>
                Les présentes conditions peuvent être modifiées à tout moment
                afin de tenir compte de l’évolution du service, du cadre légal
                ou des usages.
              </p>
              <p>
                Les utilisateurs sont invités à les consulter régulièrement.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}