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

const fetchTrendingGames = async () => {
  const resp = await rawgAPI.get("/games/lists/main", {
    params: {
      key: apiKey,
      page_size: 20,
    },
  });
  const { results, next, previous } = resp.data;
  return {
    juegos: transformJuegos(results),
    next: next,
    previous: previous,
  };
};

const fetchNextPreviousPage = async (page) => {
  const resp = await rawgAPI.get(page);
  const { results, next, previous } = resp.data;
  return { juegos: transformJuegos(results), next: next, previous: previous };
};

export { fetchTrendingGames, fetchNextPreviousPage };
