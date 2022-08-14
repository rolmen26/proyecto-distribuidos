import React, { useEffect, useState } from "react";
import { Juego } from "./Juego";
import CardView from "../view/CardView";
import { getPopularGames } from "../api/ConectaAPI";

import { Link } from 'react-router-dom';

const CardController = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    ObtenerJuegos();
  }, []);

  const ObtenerJuegos = async () => {
    const juegos = await getPopularGames();
    const juegosClass = juegos.map((juego) => {
      return new Juego(
        juego.id,
        juego.name,
        juego.description_raw,
        juego.background_image,
        juego.alternative_names,
        juego.released,
        juego.genres,
        juego.platforms,
        juego.developers,
        juego.publishers
      );
    });
    setJuegos(juegosClass);
  };

  return (
    <div className="wrapper">
      {juegos &&
        juegos.map((juego) => (
          <Link className='link__game' key={juego.id} to={`/juego/${juego.id}`}>
            <CardView
              key={juego.id}
              id={juego.id}
              title={juego.name}
              img={juego.background_image}
            />
          </Link>
        ))}
    </div>
  );
};

export default CardController;
