import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './pages/LoginPage';
import './styles/App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


function App() {
  // const [message, setMessage] = useState("Carregando...");

  // useEffect(() => {
  //   fetch("/api/")  // <-- deve bater com a chave do proxy
  //     .then(res => res.json())
  //     .then(data => setMessage(data.message))
  //     .catch(() => setMessage("Erro ao conectar à API"));
  // }, []);

  // return (
  //   <div style={{ textAlign: "center", marginTop: "3rem" }}>
  //     <h1>Frontend React 🚀</h1>
  //     <p>Mensagem do backend: {message}</p>
  //   </div>
  // );

  return (
    <div>
      <LoginPage />
    </div>
  );

}

export default App;
