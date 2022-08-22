import React from "react";
import usePopularGames from "../hooks/usePopularGames";
import { Link } from "react-router-dom";
import ViewGamesCard from "../components/ViewGamesCard";
import { Loading } from "../components/Loading";

const PopularGamesView = () => {
  const { isLoading, juegos } = usePopularGames();

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
        </div>
      )}
    </>
  );
};

export default PopularGamesView;
