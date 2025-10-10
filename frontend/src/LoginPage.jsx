import React from "react";
import "./LoginPage.css";
import logoIougurt from "./assets/logo_iougurt.svg";
import eye from "./assets/eye_open.svg";
import colors from "./styles/colors";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logoIougurt} alt="Logo Iougurt" className="logo" />
        <form className="form">
          <label htmlFor="email">Usuário</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
          />

          <label htmlFor="senha">Senha</label>
          <div className="password-wrapper">
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              required
            />
            <span src={eye}/>
          </div>

          <button type="submit" className="login-button">
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
