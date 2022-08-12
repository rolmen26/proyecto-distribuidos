import { React } from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img class="card__image" src={props.img} />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__button">View Receipt</button>
    </div>
  );
}

export { Card };
