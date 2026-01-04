import Head from "next/head";
import "../styles/globals.css";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      {/* Import de la police Manrope — institutionnel, moderne, sérieux */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Contenu principal de la page */}
      <main className="main-content">
        <Component {...pageProps} />
      </main>

      {/* Footer commun à toutes les pages */}
      <Footer />
    </div>
  );
}