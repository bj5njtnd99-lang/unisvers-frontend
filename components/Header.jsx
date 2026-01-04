import Link from "next/link";

const NavIcon = ({ children }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      marginRight: "6px",
      opacity: 0.9,
    }}
  >
    {children}
  </span>
);

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        {/* LOGO + TITRE */}
        <div className="brand">
          <div className="brand-logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 80 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="rotate(-8 40 20)">
                <circle cx="26" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <circle cx="54" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <circle cx="26" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <circle cx="54" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
              </g>
            </svg>
          </div>

          <div className="brand-text">
            <span className="brand-title">UnisVers MARSEILLAN</span>
            <span className="brand-tagline">Tous reliés dès demain</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="main-nav">

          <Link href="/">
            <NavIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7" />
                <path d="M9 22V12h6v10" />
              </svg>
            </NavIcon>
            Accueil
          </Link>

          <Link href="/presentation">
            <NavIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </NavIcon>
            Présentation
          </Link>

          <Link href="/projets">
            <NavIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </NavIcon>
            Projets
          </Link>

          <Link href="/sondages">
            <NavIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h6l3 8 3-16 3 8h3" />
              </svg>
            </NavIcon>
            Sondages
          </Link>

          <Link href="/idees">
            <NavIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 00-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 00-4-12z" />
              </svg>
            </NavIcon>
            Idées
          </Link>

          <Link href="/actualites">
            <NavIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" />
                <line x1="7" y1="8" x2="17" y2="8" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="7" y1="16" x2="13" y2="16" />
              </svg>
            </NavIcon>
            Actualités
          </Link>

          <Link href="/a-propos">
            <NavIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 22a6.5 6.5 0 0113 0" />
              </svg>
            </NavIcon>
            À propos
          </Link>

        </nav>

      </div>
    </header>
  );
}