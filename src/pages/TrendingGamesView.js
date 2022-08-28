import React from "react";
import { Link } from "react-router-dom";
import useTrendingGames from "../hooks/useTrendingGames";
import ViewGamesCard from "../components/ViewGamesCard";
import { Loading } from "../components/Loading";

const TrendingGamesView = () => {
  const { isLoading, juegos, next, previous, handlePageClick } =
    useTrendingGames();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          {juegos.map(({ id, name, background_image }) => (
            <Link className="link__game" key={id} to={`/juego/${id}`}>
              <ViewGamesCard
                id={id}
                name={name}
                background_image={background_image}
              />
            </Link>
          ))}
          {previous && (
            <button
              onClick={() => {
                handlePageClick({ page: previous });
              }}
              className="btn__game"
            >
              Previous
            </button>
          )}
          {next && (
            <button
              onClick={() => {
                handlePageClick({ page: next });
              }}
              className="btn__game"
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default TrendingGamesView;
