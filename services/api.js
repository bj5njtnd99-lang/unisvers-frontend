const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ||
  "http://localhost:3000/api";

async function request(method, path, body) {
  const url = ${API_BASE}${path};

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body !== undefined) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    let text = "";
    try {
      text = await res.text();
    } catch {}
    throw new Error(
      Erreur API ${res.status} sur ${url} : ${text || res.statusText}
    );
  }

  try {
    return await res.json();
  } catch {
    return null;
  }
}

export const api = {
  get(path) {
    return request("GET", path);
  },
  post(path, body) {
    return request("POST", path, body);
  },
}; pages/sondages/index.js:import { useEffect } from "react";
import { useRouter } from "next/router";

export default function IndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/actualites");
  }, [router]);

  return null;
}
