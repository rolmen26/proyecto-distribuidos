import React from "react";

const ViewGamesCard = (props) => {
  return (
    <>
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
    </>
  );
};

export default ViewGamesCard;
