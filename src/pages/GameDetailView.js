import React from "react";
import useGameById from "../hooks/useGameById";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

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
        </div>
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default GameDetailView;
