import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/**
 * Hook simple de gestion d'authentification utilisateur
 * basé sur un token stocké localement.
 *
 * ⚠️ Ce n'est PAS de la sécurité forte,
 * c'est un garde d'accès fonctionnel côté front.
 */
export function useAuth({ required = false } = {}) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("unisvers_user_token")
        : null;

    const ok = Boolean(token);
    setIsAuthenticated(ok);
    setReady(true);

    // Si l'accès est requis et que l'utilisateur n'est pas connecté
    if (required && !ok) {
      router.push("/compte");
    }
  }, [required, router]);

  /**
   * Connexion : stocke le token localement
   */
  function login(token) {
    if (typeof window !== "undefined") {
      localStorage.setItem("unisvers_user_token", token);
      setIsAuthenticated(true);
    }
  }

  /**
   * Déconnexion : supprime le token
   */
  function logout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("unisvers_user_token");
      setIsAuthenticated(false);
      router.push("/");
    }
  }

  return {
    ready,             // true quand le check est terminé
    isAuthenticated,   // état courant
    login,             // fonction login(token)
    logout,            // fonction logout()
  };
}
