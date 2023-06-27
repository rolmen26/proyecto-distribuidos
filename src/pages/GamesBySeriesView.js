import React from "react";
import { useParams } from "react-router-dom";
import useGamesBySeries from "../hooks/useGamesBySeries";
import ViewGamesCard from "../components/ViewGamesCard";
import { Loading } from "../components/Loading";

const GamesBySeriesView = () => {
  const { serie } = useParams();

  const { juegos, isLoading } = useGamesBySeries(serie);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          {juegos.map(({ id, name, background_image }) => (
            <ViewGamesCard
              key={id}
              id={id}
              name={name}
              background_image={background_image}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GamesBySeriesView;
