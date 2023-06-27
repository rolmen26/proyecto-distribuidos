import React from "react";
import useGameById from "../hooks/useGameById";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import "../scss/GameDetail.scss";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const GameDetailView = () => {
  const { id } = useParams();

  const { juego, isLoading } = useGameById(id);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div styled="opacity: 1; transform: none;">
          <div className="game_detail">
            <header>
              <button className="go_back" onClick={() => window.history.back()}>
                <MdArrowBackIos />
                Regresar
              </button>
              <h1>{juego.name}</h1>
            </header>
            <section>
              <div className="game_detail__image">
                <img src={juego.background_image} alt={juego.name} />
              </div>
              <div className="game_detail_info">
                <div className="game_detail__about">
                  <h2>Descripción</h2>
                  <p>{juego.description_raw}</p>
                </div>
                <div className="game_detail__questions">
                  <h2>¿Crees saber mucho sobre {juego.name}?</h2>
                  <Link to={`/preguntas-juego/${juego.id}`}>
                    <button className="btn btn--primary">Realizar Quiz</button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetailView;
