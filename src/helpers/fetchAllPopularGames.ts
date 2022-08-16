import { rawgAPI, apiKey } from "../api/rawgAPI";
import { FetchAllGames, Juegos } from "../interfaces/fetchAllGamesResponse";

const transformJuegos = (juegosList: Juegos[]): Juegos[] => {
  const juegosArray = juegosList.map((juego) => {
    return {
      id: juego.id,
      name: juego.name,
      background_image: juego.background_image
    };
  });
  return juegosArray;
};

const fetchAllPopularGames = async (): Promise<Juegos[]> => {
  const resp = await rawgAPI.get<FetchAllGames>("/games", {
    params: {
      key: apiKey,
      ordering: "-added"
    },
    responseType: "json"
  });
  const juegos = resp.data.results;
  return transformJuegos(juegos);
};

export default fetchAllPopularGames;
