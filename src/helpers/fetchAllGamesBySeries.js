import { rawgAPI, apiKey } from "../api/rawgAPI";

const transformJuegos = (juegosList) => {
  const juegosArray = juegosList.map((juego) => {
    return {
      id: juego.id,
      name: juego.name,
      background_image: juego.background_image,
    };
  });
  return juegosArray;
};

const fetchAllGamesBySeries = async (name) => {
  const resp = await rawgAPI.get("/games", {
    params: {
      key: apiKey,
      search: name,
      search_precise: true,
      search_exact: true,
      exclude_additions: true,
      exclude_collection: 123,
      exclude_game_series: false,
      ordering: "released",
      page_size: 25,
    },
    responseType: "json",
  });
  const juegos = resp.data.results;
  return transformJuegos(juegos);
};

export default fetchAllGamesBySeries;
