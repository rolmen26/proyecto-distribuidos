import React from "react";
import useGameById from "../hooks/useGameById";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";

const GameDetailView = () => {
  const { id } = useParams();

  const { juego, isLoading } = useGameById(id);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <Link className="link__game" to="/">
              <button>Go back</button>
            </Link>
          </div>
          <h1>{juego.name}</h1>
          <img src={juego.background_image} alt={juego.name} width="50%" />
          <p>{juego.description_raw}</p>
          <Link className="link__game" to={`/preguntas-juego/${id}`}>
            <button>Ver preguntas</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default GameDetailView;
