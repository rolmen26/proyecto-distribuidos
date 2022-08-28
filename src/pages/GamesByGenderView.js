import React from "react";
import { useParams } from "react-router-dom";
import useGamesByGenre from "../hooks/useGamesByGenre";
import { Link } from "react-router-dom";
import ViewGamesCard from "../components/ViewGamesCard";
import { Loading } from "../components/Loading";

const GamesByGenderView = () => {
  const { genre } = useParams();

  const { juegos, isLoading, next, previous, handlePageClick } =
    useGamesByGenre(genre);

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

export default GamesByGenderView;
