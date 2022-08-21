import React from "react";
import { useParams } from "react-router-dom";
import useGameData from "../hooks/useGameData";

const GameQuestionView = () => {
  const { id } = useParams();
  const { juego, isLoading } = useGameData(id);
  return (
    <>
      {isLoading ? (
        <div>
          <p>Cargando preguntas..</p>
        </div>
      ) : (
        <div>
          <h1>{juego.name}</h1>
          <img src={juego.background_image} alt={juego.name} width="50%" />
          <p>{juego.description_raw} </p>
          <h2>Salio en</h2>
          <p>{juego.released}</p>
          <h2>Tiempo de juego</h2>
          <p>{juego.playtime}</p>
          <h2>Desarrolladores</h2>
          {juego.developers.map((desarrollador) => (
            <p key={desarrollador.name}>{desarrollador.name}</p>
          ))}
          <h2>Generos</h2>
          {juego.genres.map((genero) => (
            <p key={genero.name}>{genero.name}</p>
          ))}
          <h2>Tags</h2>
          {juego.tags.map((tag) => (
            <p key={tag.name}>{tag.name}</p>
          ))}
          <h2>Publishers</h2>
          {juego.publishers.map((publisher) => (
            <p key={publisher.name}>{publisher.name}</p>
          ))}
          <h2>Platforms</h2>
          {juego.platforms &&
            juego.platforms.map((platform) => (
              <p key={platform.platform.name}>{platform.platform.name}</p>
            ))}
          <h2>Additions</h2>
          {juego.additions ? (
            juego.additions.map((addition) => (
              <p key={addition.adicion_nombre}>{addition.adicion_nombre}</p>
            ))
          ) : (
            <p>No hay informacion disponible</p>
          )}
          <h2>Achievements </h2>
          {juego.achievements ? (
            juego.achievements.map((achievement) => (
              <p key={achievement.nombre_logro}>{achievement.nombre_logro}</p>
            ))
          ) : (
            <p>No hay informacion disponible</p>
          )}
          <h2>Creators</h2>
          {juego.creators ? (
            juego.creators.map((creator) => (
              <p key={creator.creador_nombre}>{creator.creador_nombre}</p>
            ))
          ) : (
            <p>No hay informacion disponible</p>
          )}
        </div>
      )}
    </>
  );
};

export default GameQuestionView;
