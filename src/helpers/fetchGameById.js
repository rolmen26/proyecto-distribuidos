import { rawgAPI, apiKey } from "../api/rawgAPI";

const transformJuegos = (juego) => {
  const juegoById = {
    id: juego.id,
    name: juego.name,
    background_image: juego.background_image,
    description_raw: juego.description_raw,
    released: juego.released
  };
  return juegoById;
};

const fetchGameById = async (id) => {
  const resp = await rawgAPI.get("/games/" + id, {
    params: {
      key: apiKey
    },
  });
  const juegos = resp.data;
  return transformJuegos(juegos);
};

export default fetchGameById;
