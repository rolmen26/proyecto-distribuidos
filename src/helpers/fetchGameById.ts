import { rawgAPI, apiKey } from "../api/rawgAPI";
import { Juego } from "../interfaces/fetchAllGamesResponse";

const transformJuegos = (juego: Juego): Juego => {
  const juegoById = {
    id: juego.id,
    name: juego.name,
    background_image: juego.background_image,
    released: juego.released
  };
  return juegoById;
};

const fetchGameById = async (id: number): Promise<Juego> => {
  const resp = await rawgAPI.get<Juego>("/games/" + id, {
    params: {
      key: apiKey
    },
    responseType: "json"
  });
  const juegos = resp.data;
  return transformJuegos(juegos);
};

export default fetchGameById;
