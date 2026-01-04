import Header from "../components/Header";

export default function PolitiqueConfidentialite() {
  return (
    <div>
      <Header />

      <main className="home-main">
        {/* HERO CONFIDENTIALITÉ */}
        <section className="hero-main">
          <div className="hero-text">
            <p className="hero-kicker">Données &amp; confidentialité</p>

            <h2>Politique de confidentialité d’UnisVers Marseillan.</h2>

            <p className="hero-subtitle">
              Cette page explique de manière simple quelles données peuvent être
              traitées via UnisVers Marseillan, dans quel but, et avec quelles
              garanties pour les habitantes et habitants.
            </p>

            <p className="hero-footnote">
              UnisVers Marseillan est un premier déploiement local de la
              plateforme citoyenne <strong>UnisVers</strong>, développée par{" "}
              <strong>Infinity8.org</strong>. Cette politique pourra être
              ajustée si la plateforme évolue ou est reprise officiellement par
              une collectivité.
            </p>
          </div>
        </section>

        {/* 1. PRINCIPES */}
        <section className="home-section">
          <h3 className="section-title">1. Principes généraux</h3>

          <p className="section-intro">
            La philosophie d’UnisVers est simple&nbsp;: recueillir des
            contributions citoyennes pour éclairer les décisions, sans
            surveiller, profiler ou exploiter les personnes.
          </p>

          <div className="section-grid">
            <article className="section-card">
              <h4>Respect des personnes</h4>
              <p>
                Les données sont collectées avec une seule intention&nbsp;:
                mieux comprendre les besoins, priorités et idées exprimées par
                les habitantes et habitants d’un territoire.
              </p>
              <p>
                UnisVers n’a pas vocation à devenir un outil de profilage
                individuel ni un instrument de pression politique. L’angle
                reste collectif, jamais centré sur une personne isolée.
              </p>
            </article>

            <article className="section-card">
              <h4>Minimalisme des données</h4>
              <p>
                Dans la mesure du possible, seules les informations strictement
                utiles au fonctionnement de la plateforme sont conservées&nbsp;:
                contenus d’idées, réponses de sondages, événements saisis.
              </p>
              <p>
                Les informations nominatives sont limitées ou évitées lorsque
                cela est réalisable, et ne sont pas utilisées pour suivre des
                individus.
              </p>
            </article>

            <article className="section-card">
              <h4>Transparence</h4>
              <p>
                Les usages des données doivent être compréhensibles par
                n&apos;importe quel citoyen&nbsp;: pourquoi elles sont collectées,
                ce qui est fait avec, et ce qui n’est pas fait (revente,
                ciblage, profilage, etc.).
              </p>
            </article>
          </div>
        </section>

        {/* 2. DONNÉES COLLECTÉES */}
        <section className="home-section">
          <h3 className="section-title">
            2. Données susceptibles d’être collectées
          </h3>

          <p className="section-intro">
            Selon la configuration exacte choisie par la ville ou le collectif
            qui utilisera UnisVers, les types de données peuvent inclure&nbsp;:
          </p>

          <div className="section-grid">
            <article className="section-card">
              <h4>Idées citoyennes</h4>
              <p>
                Quand un utilisateur soumet une idée, sont typiquement
                enregistrés&nbsp;:
              </p>
              <ul>
                <li>le texte de l’idée,</li>
                <li>la catégorie éventuelle (mobilité, propreté, etc.),</li>
                <li>la date et l’heure de la soumission.</li>
              </ul>
              <p>
                Ces éléments servent à afficher, classer et analyser les idées.
                Selon les choix de l’éditeur, l’affichage peut être nominatif,
                pseudonymisé ou anonyme.
              </p>
            </article>

            <article className="section-card">
              <h4>Réponses aux sondages</h4>
              <p>
                Lorsqu’un citoyen répond à un sondage, ce sont les réponses et
                les statistiques agrégées qui sont utilisées.
              </p>
              <p>
                Les résultats sont exploités à un niveau global (pourcentages,
                tendances) et non pour reconstruire un comportement individuel.
              </p>
            </article>

            <article className="section-card">
              <h4>Validation via téléphone (optionnel)</h4>
              <p>
                Dans certaines configurations, un numéro de téléphone peut être
                utilisé pour vérifier qu’une personne est bien réelle et limiter
                les abus (multiplication de votes, spam, etc.).
              </p>
              <p>
                Le code de validation est stocké de manière temporaire. Le
                numéro de téléphone, s’il est conservé, ne doit pas être utilisé
                pour de la prospection commerciale ou du démarchage massif.
              </p>
            </article>

            <article className="section-card">
              <h4>Données techniques (logs)</h4>
              <p>
                Comme tout site web, des informations techniques minimales
                peuvent être enregistrées (adresse IP tronquée, type de
                navigateur, horodatage) pour la sécurité et le bon
                fonctionnement du service.
              </p>
            </article>
          </div>
        </section>

        {/* 3. CE QUI N’EST PAS FAIT */}
        <section className="home-section">
          <h3 className="section-title">3. Ce qui n’est pas fait avec les données</h3>

          <div className="section-grid">
            <article className="section-card">
              <h4>Pas de revente</h4>
              <p>
                Les données issues d’UnisVers (idées, réponses, statistiques)
                ne sont pas revendues à des entreprises tierces ou à des acteurs
                extérieurs au projet.
              </p>
            </article>

            <article className="section-card">
              <h4>Pas de profilage politique individuel</h4>
              <p>
                L’objectif est de comprendre des tendances globales, pas de
                construire des profils psychologiques ou politiques
                individuels.
              </p>
              <p>
                Les visualisations et analyses produites sont de nature
                agrégée et orientées sur les sujets, pas sur les personnes.
              </p>
            </article>

            <article className="section-card">
              <h4>Pas d’exploitation commerciale</h4>
              <p>
                UnisVers est conçu comme une infrastructure citoyenne. Les
                données ne sont pas utilisées pour du ciblage publicitaire
                ou pour de la publicité comportementale.
              </p>
            </article>
          </div>
        </section>

        {/* 4. DURÉE & DROITS */}
        <section className="home-section">
          <h3 className="section-title">
            4. Durée de conservation &amp; droits des utilisateurs
          </h3>

          <div className="section-grid">
            <article className="section-card">
              <h4>Durée de conservation</h4>
              <p>
                La durée de conservation des données doit être définie par la
                structure qui déploie UnisVers (collectif, association,
                collectivité), en cohérence avec le droit applicable.
              </p>
              <p>
                À titre indicatif, les contributions citoyennes peuvent être
                conservées aussi longtemps qu’elles sont utiles à l’analyse
                des politiques publiques locales et à la compréhension des
                priorités sur le territoire.
              </p>
            </article>

            <article className="section-card">
              <h4>Droit d’accès, de rectification, d’effacement</h4>
              <p>
                Conformément au Règlement général sur la protection des
                données (RGPD), chaque utilisateur doit pouvoir demander&nbsp;:
              </p>
              <ul>
                <li>l’accès aux données qui le concernent,</li>
                <li>la rectification d’une information inexacte,</li>
                <li>
                  la suppression de ses données, lorsque cela est compatible
                  avec les obligations légales et les contraintes techniques.
                </li>
              </ul>
              <p>
                Les modalités pratiques (adresse de contact dédiée, formulaire)
                devront être précisées par l’éditeur lors du passage en mise en
                ligne publique.
              </p>
            </article>
          </div>
        </section>

        {/* 5. SÉCURITÉ */}
        <section className="home-section">
          <h3 className="section-title">5. Sécurité &amp; hébergement</h3>

          <div className="section-grid">
            <article className="section-card">
              <h4>Protection technique</h4>
              <p>
                La sécurité des données dépend notamment de l’hébergeur choisi
                (par exemple OVH, Scaleway, ou autre) et de la configuration
                retenue&nbsp;: chiffrement, sauvegardes, limitation des accès aux
                seules personnes autorisées.
              </p>
            </article>

            <article className="section-card">
              <h4>Phase actuelle du projet</h4>
              <p>
                À ce stade, UnisVers Marseillan fonctionne comme prototype
                local d’UnisVers. Les données manipulées peuvent être fictives
                ou limitées à un usage de test.
              </p>
              <p>
                Si la plateforme est ouverte à un public large et utilisée de
                façon continue, une politique de sécurité détaillée (hébergement,
                sauvegardes, gestion des incidents) devra être formalisée et
                publiée ici.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}