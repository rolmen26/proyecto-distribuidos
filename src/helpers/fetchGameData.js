import { rawgAPI, apiKey } from "../api/rawgAPI";

const transformJuegos = (juego) => {
  const juegoById = {
    id: juego.id,
    name: juego.name,
    background_image: juego.background_image,
    description_raw: juego.description_raw,
    released: juego.released, //Cuando fue lanzado el juego
    playtime: juego.playtime, //Tiempo de juego para completarlo
    developers: juego.developers, //Desarrolladores
    genres: juego.genres, //A que genero perteneces
    tags: juego.tags, //Tags como multijugador, un solo juegador, etc..
    publishers: juego.publishers, //Los publishers 
    stores: juego.stores, //Tiendas donde se encuentra 
    parent_platforms: juego.parent_platforms, //Plataformas padre en las que se encuentra 
    platforms: juego.platforms, //Consolas en las que se encuentra
    additions: juego.additions_count != 0 ? fetchGameAdditions(juego.id) : [], //Cuantos DLC o contenido extra tiene -> Puede ser 0  Operador Ternario
    achievvements: juego.achievements_count != 0 ? fetchGameAchievements(juego.id) : [], //Cuantos logros tiene -> Puede ser 0
    creators: juego.creators_count > 0 ? fetchGameCreators(juego.id) : [], //Cuantos creadores tiene -> puede ser nulo
  };
  return juegoById;
};

const fetchGameData = async (id) => {
  const resp = await rawgAPI.get("/games/" + id, {
    params: {
      key: apiKey
    }
  });
  const juegos = resp.data;
  return transformJuegos(juegos);
};

const fetchGameAdditions = async = (id) => {
  const resp = await rawgAPI.get('/games/' + id + '/additions', {
    params: {
      key: apiKey
    }
  });
  const adiciones = resp.data.results;
  const adicionesArr = adiciones.map((adicion) => {
    return {
      adicion_nombre: adicion.name,
    }
  })
  return adicionesArr;
}

const fetchGameAchievements = async = (id) => {
  const resp = await rawgAPI.get('/games/' + id + '/achievements', {
    params: {
      key: apiKey
    }
  });
  const logros = resp.data.results;
  const logrosArr = logros.map((logro) => {
    return {
      nombre_logro: logro.name,
    }
  })
  return logrosArr;
}

const fetchGameCreators = async = (id) => {
  const resp = await rawgAPI.get('/games/' + id + '/development-team', {
    params: {
      key: apiKey
    }
  });
  const creadores = resp.data.results;
  const creadoresArr = creadores.map((creador) => {
    return {
      creador_nombre: creador.name,
    }
  })
  return creadoresArr;
}

export default fetchGameData;
