import React from "react";
import { Loading } from "../components/Loading";
import usePopularGames from "../hooks/usePopularGames";
import { Link } from "react-router-dom";

const PopularGamesView = () => {
  const { isLoading, juegos } = usePopularGames();

  return (
    <>
      <div className="wrapper">
        {juegos.map(({ id, name, background_image }) => (
          <Link className="link__game" key={id} to={`/juego/${id}`}>
            <div className="card">
              <div className="card__body">
                <img
                  key={id}
                  id={id}
                  className="card__image"
                  src={background_image}
                  alt={name}
                />
              </div>
              <div className="card__title">{name}</div>
            </div>
          </Link>
        ))}
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default PopularGamesView;
