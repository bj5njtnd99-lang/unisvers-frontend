const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000/api";

function getUserToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("unisvers_user_token");
}

async function request(method, path, body, { auth = false } = {}) {
  const url = `${API_BASE}${path}`;

  const headers = { "Content-Type": "application/json" };

  if (auth) {
    const token = getUserToken();
    if (!token) {
      const err = new Error("Non connecté");
      err.code = "AUTH_REQUIRED";
      throw err;
    }
    headers.Authorization = `Bearer ${token}`;
  }

  const options = { method, headers };

  if (body !== undefined) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    let text = "";
    try {
      text = await res.text();
    } catch {}

    const err = new Error(
      `Erreur API ${res.status} sur ${url} : ${text || res.statusText}`
    );
    err.status = res.status;
    err.url = url;
    err.body = text;
    throw err;
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

  // ✅ endpoints nécessitant un utilisateur connecté
  getAuth(path) {
    return request("GET", path, undefined, { auth: true });
  },
  postAuth(path, body) {
    return request("POST", path, body, { auth: true });
  },

  // ✅ helper clair pour le vote
  voteSondage(sondageId, optionLabel) {
    return request("POST", `/sondages/${sondageId}/vote`, { option: optionLabel }, { auth: true });
  },
};
