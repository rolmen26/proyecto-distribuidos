import React from "react";
import { useParams } from "react-router-dom";
import useGamesByGenre from "../hooks/useGamesByGenre";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";

const GamesByGenderView = () => {
  const { genre } = useParams();

  const { juegos, isLoading } = useGamesByGenre(genre);

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

export default GamesByGenderView;
