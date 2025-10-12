const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function loginUser(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const err = await response.json().catch(()=>({detail:"Erro"}));
    throw new Error(err.detail || "Erro ao efetuar login");
  }
  return response.json();
}


// Esse arquivo não está fazendo nada