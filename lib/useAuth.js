import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

/**
 * Auth front simple: token user stocké en localStorage.
 * Sert à envoyer Authorization: Bearer <token> aux endpoints protégés.
 */
export function useAuth({ required = false } = {}) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const storageKey = "unisvers_user_token";

  const getToken = useMemo(
    () => () => {
      if (typeof window === "undefined") return null;
      return localStorage.getItem(storageKey);
    },
    []
  );

  const getAuthHeaders = useMemo(
    () => () => {
      const token = getToken();
      return token ? { Authorization: `Bearer ${token}` } : {};
    },
    [getToken]
  );

  useEffect(() => {
    const token = getToken();
    const ok = Boolean(token);

    setIsAuthenticated(ok);
    setReady(true);

    if (required && !ok) {
      router.push("/compte");
    }
  }, [required, router, getToken]);

  function login(token) {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, token);
      setIsAuthenticated(true);
    }
  }

  function logout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem(storageKey);
      setIsAuthenticated(false);
      router.push("/");
    }
  }

  return {
    ready,
    isAuthenticated,
    login,
    logout,
    getToken,
    getAuthHeaders,
  };
}
