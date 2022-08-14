import React, { useEffect, useState } from "react";
import { Juego } from "./Juego";
import CardView from "../view/CardView";
import { getPopularGames } from "../api/ConectaAPI";
import "../scss/Card.scss";
import { Link } from "react-router-dom";

const CardController = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    async function getJuegos() {
      const juegos = await getPopularGames();
      setJuegos(juegos);
    }
    getJuegos();
  }, []);

  return (
    <>
      <div className="wrapper">
        {juegos &&
          juegos.map((juego) => (
            <Link
              className="link__game"
              key={juego.id}
              to={`/juego/${juego.id}`}
            >
              <CardView
                key={juego.id}
                id={juego.id}
                title={juego.name}
                img={juego.background_image}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default CardController;
