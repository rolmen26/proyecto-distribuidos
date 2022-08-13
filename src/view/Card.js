import { React } from "react";

function Card(props) {
  return (
    <div className="card" id={props.id}>
      <div className="card__body">
        <img className="card__image" src={props.img} alt="Imagen del juego" />
        <h2 className="card__title">{props.title}</h2>
      </div>
    </div>
  );
}

export { Card };
