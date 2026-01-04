import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p>
            UnisVers MARSEILLAN — plateforme citoyenne locale. Prototype du
            noyau UnisVers développé par Infinity8.org.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/mentions-legales">Mentions légales</Link>
          <span className="footer-separator">·</span>
          <Link href="/politique-confidentialite">
            Politique de confidentialité
          </Link>
          <span className="footer-separator">·</span>
          <Link href="/conditions-utilisation">
            Conditions d&apos;utilisation
          </Link>
        </div>
      </div>
    </footer>
  );
}