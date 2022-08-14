import React from "react";

const GenreView = () => {
  return (
    <>
      <div className="wrapper">
        <div className="card__container">
          <div className="card__container__item">
            <div className="card__container__item__img">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="card__container__item__title">
              <h2>Titulo</h2>
            </div>
            <div className="card__container__item__description">
              <p>Descripcion</p>
            </div>
          </div>
          <div className="card__container__item">
            <div className="card__container__item__img">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="card__container__item__title">
              <h2>Titulo</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenreView;
