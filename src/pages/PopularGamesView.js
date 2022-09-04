import React from "react";
import usePopularGames from "../hooks/usePopularGames";
import ViewGamesCard from "../components/ViewGamesCard";
import { Loading } from "../components/Loading";

const PopularGamesView = () => {
  const { isLoading, juegos, next, previous, handlePageClick } =
    usePopularGames();

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

export default PopularGamesView;
