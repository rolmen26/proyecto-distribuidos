import React from "react";
import useGameById from "../hooks/useGameById";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Link } from "react-router-dom";

const GameDetailView = () => {
  const { id } = useParams();

  const { juego, isLoading } = useGameById(id);

  return (
    <>
      {juego && (
        <div>
          <h1>{juego.name}</h1>
          <img src={juego.background_image} alt={juego.name} />
          <p>{juego.description_raw}</p>
          <Link className="link__game" to={`/preguntas-juego/${id}`}>
            <button>Ver preguntas</button>
          </Link>
        </div>
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default GameDetailView;
