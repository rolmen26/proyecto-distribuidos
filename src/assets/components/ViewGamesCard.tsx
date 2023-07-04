import React from "react";
import { Link } from "react-router-dom";
import "../scss/GameCard.scss";

type gameProperties = { id: number, background_image: string, name: string }

const ViewGamesCard = (props: gameProperties) => {
  return (
    <>
      <Link className="link__game" key={props.id} to={`/juego/${props.id}`}>
        <div className="card">
          <div className="card__body">
            <img
              key={props.id}
              id={props.id}
              className="card__image"
              src={props.background_image}
              alt={props.name}
            />
          </div>
          <div className="card__title">{props.name}</div>
        </div>
      </Link>
    </>
  );
};

export default ViewGamesCard;
