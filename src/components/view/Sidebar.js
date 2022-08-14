import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Juegos Populares</Link>
        </li>
        <li>
          Generos
          <ul>
            <li>
              <Link to="/genero/action">Accion</Link>
            </li>
            <li>
              <Link to="/genero/arcade">Arcade</Link>
            </li>
            <li>
              <Link to="/genero/adventure">Aventura</Link>
            </li>
            <li>
              <Link to="/genero/casual">Casual</Link>
            </li>
            <li>
              <Link to="/genero/sports">Deporte</Link>
            </li>
            <li>
              <Link to="/genero/massively-multiplayer">Multijugador</Link>
            </li>
            <li>
              <Link to="/genero/shooter">Shooter</Link>
            </li>
            <li>
              <Link to="/genero/indie">Indie</Link>
            </li>
            <li>
              <Link to="/genero/family">Familia</Link>
            </li>
            <li>
              <Link to="/genero/fighting">Pelea</Link>
            </li>
            <li>
              <Link to="/genero/platformer">Plataformas</Link>
            </li>
            <li>
              <Link to="/genero/role-playing-games-rpg">RPG</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
