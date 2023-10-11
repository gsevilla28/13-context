import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Inicio = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de Inicio</p>
      <p>
        nombre: {usuario.nombre} - {usuario.web}
      </p>
    </div>
  );
};
