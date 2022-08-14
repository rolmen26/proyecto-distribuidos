import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJuegosByGenre } from "../api/ConectaAPI";
import { Link } from "react-router-dom";
import CardView from "../view/CardView";
import { Juego } from "./Juego";

const GamesGenres = () => {
  const { genre } = useParams();
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    async function getJuegos() {
      const juegos = await getJuegosByGenre(genre);
      setJuegos(juegos);
    }
    getJuegos();
  }, [genre]);

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

export default GamesGenres;
