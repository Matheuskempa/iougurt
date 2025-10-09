import logo from "./assets/logo_iougurt.svg";
import background from "./assets/background_mudar.svg";
import colors from "./styles/colors";

function LoginPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>
          <img src={logo} alt="Iougurt Logo" style={styles.icon} />
          <h1 style={styles.title}>Iougurt</h1>
        </div>
        <input
          type="text"
          placeholder="Digite seu email"
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          style={styles.input}
        />
        <button style={styles.button}>Entrar</button>
        <a href="#" style={styles.link}>
          Esqueceu sua senha?
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(-45deg, #ff69b4, #ffe4e1, #ffc0cb, #ffb6c1)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 15s ease infinite",
    overflow: "hidden",
  },
  card: {
    backgroundColor: colors.white,
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "90%",
    maxWidth: "400px", // limita o tamanho em telas grandes
    boxSizing: "border-box",
  },
  logo: {
    marginBottom: "20px",
  },
  icon: {
    width: "40px",
    height: "40px",
  },
  title: {
    color: colors.PrimaryPink,
    fontFamily: "sans-serif",
    fontSize: "28px",
    margin: "10px 0",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: colors.PrimaryPink,
    color: colors.white,
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  link: {
    display: "block",
    marginTop: "15px",
    color: colors.PrimaryPink,
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default LoginPage;
