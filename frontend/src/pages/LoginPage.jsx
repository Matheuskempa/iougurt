import React, { useState } from "react";
import "../styles/LoginPage.css";
import logoIougurt from "../assets/logo_iougurt.svg";
import eyeOpen from "../assets/eye_open.svg";
import eyeClosed from "../assets/eye_closed.svg";
import colors from "../styles/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8000/usuario/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login realizado:", data);
        // redirecionar ou salvar token
        window.location.reload();
        
      } else {
        setError(data.detail || "Email ou senha incorretos");
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      setError("Não foi possível conectar ao servidor");
    }
  };

  const handleTestApi = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const data = await response.json();
      console.log("Resposta da API:", data);
      alert("Resposta da API: " + JSON.stringify(data));
    } catch (err) {
      console.error("Erro ao chamar API:", err);
      alert("Erro ao conectar com a API");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logoIougurt} alt="Logo Iougurt" className="logo" />
        <form className="form" onSubmit={handleLogin}>
          <label htmlFor="email">Usuário</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="senha">Senha</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <img
              src={showPassword ? eyeClosed : eyeOpen}
              alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-visibility"
            />
            {error && <span className="error-message">{error}</span>}
          </div>

          <button
            type="button"
            className="login-button"
            onClick={handleLogin}
          >
            Entrar
          </button>

          <a href="#" className="forgot-password">
            Esqueceu sua senha?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
