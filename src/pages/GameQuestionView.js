import React from "react";
import { useParams } from "react-router-dom";
import useGameData from "../hooks/useGameData";
import preguntas from "../components/Preguntas";
import { useEffect, useState } from "react";

const GameQuestionView = () => {
  const { id } = useParams();
  const { juego, isLoading } = useGameData(id);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);

  function handleAnswerSubmit(correcta, e) {
    if (correcta) setPuntuacion(puntuacion + 1);
    e.target.classList.add(correcta ? "correct" : "incorrect");
    setTimeout(() => {
      if (preguntaActual === preguntas(juego).length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(10);
      }
    }, 1000);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);
    return () => clearInterval(interval);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <div className="game-over">
        <h1>Juego terminado</h1>
        <p>
          Puntuación: <strong>{puntuacion}</strong>
        </p>
        <button
          onClick={() => (window.location.href = "/preguntas-juego/" + id)}
        >
          Jugar de nuevo
        </button>
        <button onClick={() => (window.location.href = "/")}>
          Volver al inicio
        </button>
      </div>
    );

  return (
    <>
      {isLoading ? (
        <div>
          <p>Cargando preguntas...</p>
        </div>
      ) : (
        <div className="preguntas">
          <div className="lado-izquierdo">
            <div className="numero-pregunta">
              <span>Pregunta {preguntaActual + 1} de</span>
              {preguntas(juego).length}
            </div>
            <div className="titulo-pregunta">
              <span>{preguntas(juego)[preguntaActual].pregunta}</span>
            </div>
            <div>
              {!areDisabled ? (
                <span className="tiempo-restante">
                  Tiempo restante: {tiempoRestante}
                </span>
              ) : (
                <button
                  onClick={() => {
                    setTiempoRestante(10);
                    setAreDisabled(false);
                    setPreguntaActual(preguntaActual + 1);
                  }}
                >
                  Continuar
                </button>
              )}
            </div>
          </div>
          <div className="lado-derecho">
            {preguntas(juego)[preguntaActual].opciones.map((resp) => (
              <button
                disabled={areDisabled}
                key={resp.opcion}
                onClick={(e) => {
                  handleAnswerSubmit(resp.correcta, e);
                }}
              >
                {resp.opcion}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GameQuestionView;
