import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./routing/AppRouter";
import { PruebaContext } from "./context/PruebaContext";
import { useEffect, useState } from "react";

function App() {
  const [usuario, setUsuario] = useState({});

  //solo se va a ejcutar la primera vez que cargue el componente
  useEffect(() => {
    console.log("USE EFFECT UNA VEZ");
    let usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuarioLocal);
  }, []);

  useEffect(() => {
    console.log("CAMBIO EN ESTADO USUARIO");
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  // const curso = {
  //   id: 1,
  //   titulo: "master en react",
  //   contenido: "muchas horas de contenido",
  // };

  return (
    <div className="App">
      <PruebaContext.Provider
        value={{
          usuario,
          setUsuario,
        }}
      >
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
