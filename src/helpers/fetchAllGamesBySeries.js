// import { rawgAPI, apiKey } from "../api/RawgClient";

// const transformJuegos = (juegosList) => {
//   const juegosArray = juegosList.map((juego) => {
//     return {
//       id: juego.id,
//       name: juego.name,
//       background_image: juego.background_image,
//     };
//   });
//   return juegosArray;
// };

// const fetchAllGamesBySeries = async (name) => {
//   const resp = await rawgAPI.get("/games/" + name + "/game-series", {
//     params: {
//       key: apiKey,
//       page_size: 50,
//     },
//   });
//   const juegos = resp.data.results;
//   return transformJuegos(juegos);
// };

// export default fetchAllGamesBySeries;
