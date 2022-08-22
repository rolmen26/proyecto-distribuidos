import { rawgAPI, apiKey } from "../api/rawgAPI";

const transformJuegos = (juegosList) => {
  const juegosArray = juegosList.map((juego) => {
    return {
      id: juego.id,
      name: juego.name,
      background_image: juego.background_image
    };
  });
  return juegosArray;
};

const fetchAllGamesByGenre = async (genre) => {
  const resp = await rawgAPI.get("/games", {
    params: {
      key: apiKey,
      genres: genre
    },
  });
  const juegos = resp.data.results;
  return transformJuegos(juegos);
};

export default fetchAllGamesByGenre;
