import Header from "../components/Header";
import Link from "next/link";

export default function APropos() {
  return (
    <div>
      <Header />

      <main className="home-main">
        {/* ========== HERO A PROPOS ========== */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">À propos · UnisVers &amp; Infinity8.org</p>

            <h2>À propos d’UnisVers Marseillan.</h2>

            <p className="hero-subtitle">
              UnisVers Marseillan est une instance locale de la plateforme
              citoyenne UnisVers, conçue pour rendre la vie de la ville plus
              lisible et plus participative. La plateforme est développée et
              structurée par Infinity8.org, en tant qu’infrastructure neutre,
              indépendante de toute orientation politique.
            </p>

            <p className="hero-footnote">
              Cette page présente la logique d’UnisVers, le rôle d’Infinity8.org,
              et la place d’UnisVers Marseillan comme première déclinaison
              publique du Core UnisVers à l’échelle d’une commune.
            </p>
          </div>
        </section>

        {/* ========== SECTION 1 — CE QU’EST UNISVERS ========== */}
        <section className="home-section home-section-alt">
          <h2 className="section-title">
            UnisVers&nbsp;: une plateforme citoyenne neutre
          </h2>

          <p className="section-intro">
            UnisVers n’est ni un parti politique, ni une institution, ni une
            campagne. C’est une infrastructure&nbsp;: une manière d’organiser
            et de rendre lisibles les informations d’un territoire, pour qu’elles
            puissent être comprises par toutes et tous.
          </p>

          <div className="section-grid">
            <div className="section-card">
              <h4>Une infrastructure, pas une étiquette</h4>
              <p>
                La même plateforme peut être utilisée par des acteurs différents
                (collectivités, associations, collectifs, équipes locales).
                Ce qui varie, ce sont les contenus présentés&nbsp;: projets,
                idées, sondages ou informations locales, pas l’outil lui-même.
              </p>
            </div>

            <div className="section-card">
              <h4>Quatre blocs pour lire la ville</h4>
              <p>
                UnisVers repose sur quatre blocs principaux&nbsp;:
                projets, sondages, idées citoyennes et actualités.
                Ensemble, ils offrent une lecture structurée de ce qui est prévu,
                de ce qui est débattu, de ce qui remonte du terrain et de ce qui
                se déroule concrètement.
              </p>
            </div>

            <div className="section-card">
              <h4>Un cadre reproductible</h4>
              <p>
                La structure d’UnisVers est pensée pour être réutilisée dans
                d’autres villes ou territoires. UnisVers Marseillan constitue
                un premier terrain d’application concret du Core, conçu pour
                être adapté ailleurs sans être recréé.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 2 — INFINITY8.ORG ========== */}
        <section className="home-section">
          <h2 className="section-title">
            Infinity8.org&nbsp;: conception du Core UnisVers
          </h2>

          <p className="section-intro">
            La conception de la plateforme UnisVers, dans sa logique et son
            architecture, est portée par Infinity8.org. L’objectif est de
            proposer un outil cohérent, durable et réutilisable, indépendant
            des contextes politiques locaux.
          </p>

          <div className="section-grid">
            <div className="section-card">
              <h4>Création et cohérence du Core</h4>
              <p>
                Infinity8.org définit le Core d’UnisVers&nbsp;: l’organisation
                des modules (projets, sondages, idées, actualités), les principes
                de lisibilité citoyenne et la cohérence globale de la plateforme.
              </p>
            </div>

            <div className="section-card">
              <h4>Un rôle de structure, pas de contenu</h4>
              <p>
                Infinity8.org ne produit pas les contenus locaux et ne se
                substitue pas aux acteurs du territoire. Les textes, projets,
                propositions et informations publiées dans une instance locale
                relèvent de celles et ceux qui les portent.
              </p>
            </div>

            <div className="section-card">
              <h4>Neutralité de l’outil</h4>
              <p>
                UnisVers est conçu pour rester neutre&nbsp;: l’outil ne défend
                aucune orientation, il structure simplement la manière de rendre
                visibles les réalités, les priorités et les dynamiques d’un
                territoire.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 3 — UNISVERS MARSEILLAN AUJOURD’HUI ========== */}
        <section className="home-section home-section-alt">
          <h2 className="section-title">UnisVers Marseillan aujourd’hui</h2>

          <p className="section-intro">
            À ce stade, UnisVers Marseillan fonctionne comme un prototype
            opérationnel&nbsp;: la structure est en place, les modules sont
            fonctionnels, et le territoire de Marseillan sert de cadre réel
            pour éprouver la plateforme à l’échelle d’une commune.
          </p>

          <div className="section-grid">
            <div className="section-card">
              <h4>Un premier terrain d’application</h4>
              <p>
                Marseillan constitue le premier terrain d’utilisation d’UnisVers&nbsp;:
                suivi des projets, remontée des idées citoyennes, sondages
                thématiques et diffusion d’informations locales.
              </p>
            </div>

            <div className="section-card">
              <h4>Contenus évolutifs</h4>
              <p>
                Les contenus présentés peuvent évoluer, être enrichis ou ajustés.
                Certains éléments illustrent le fonctionnement global de la
                plateforme dans ce contexte initial.
              </p>
            </div>

            <div className="section-card">
              <h4>Vers une version stabilisée</h4>
              <p>
                Cette phase permet d’affiner les usages, la lisibilité et la
                cohérence d’ensemble, avant une éventuelle généralisation ou
                un déploiement plus large.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 4 — UTILISATION FUTURE ========== */}
        <section className="home-section">
          <h2 className="section-title">
            Et si UnisVers était déployé ailleurs&nbsp;?
          </h2>

          <p className="section-intro">
            La même structure pourrait être adaptée à d’autres villes,
            quartiers ou territoires, chacun conservant son identité locale
            tout en s’appuyant sur un socle commun.
          </p>

          <div className="section-grid">
            <div className="section-card">
              <h4>Pour une collectivité</h4>
              <p>
                Utiliser UnisVers comme outil de lecture citoyenne&nbsp;:
                projets, informations locales, participation et suivi
                dans le temps.
              </p>
            </div>

            <div className="section-card">
              <h4>Pour un collectif ou une association</h4>
              <p>
                Structurer une démarche locale de manière lisible, sans
                reconstruire une plateforme spécifique à chaque initiative.
              </p>
            </div>

            <div className="section-card">
              <h4>Informations légales</h4>
              <p>
                Les informations relatives au cadre juridique et à l’éditeur
                de la plateforme sont disponibles dans les mentions légales.
              </p>
              <Link href="/mentions-legales" className="card-link">
                Consulter les mentions légales
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}