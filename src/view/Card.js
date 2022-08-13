import { React } from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={props.img} alt="Imagen del juego" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__button">Realizar encuesta</button>
    </div>
  );
}

export { Card };
