import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Articulos } from "../components/Articulos";
import { Acerca } from "../components/Acerca";
import { Contacto } from "../components/Contacto";
import { Login } from "../components/Login";
import { PruebaContext } from "../context/PruebaContext";

export const AppRouter = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <BrowserRouter>
      {/* menu de navegacion */}
      <header className="header">
        <nav>
          <div className="logo">
            <h2>Apendiendo React Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/acercade">A cerca de</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>

            {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
              <>
                <li>
                  <NavLink to="/">{usuario.nick}</NavLink>
                </li>
                <li>
                  <a
                    href="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setUsuario({});
                    }}
                  >
                    Cerrar Sesión
                  </a>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Identificate</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/acercade" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Esta Pagina no existe</h1>
              </div>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
