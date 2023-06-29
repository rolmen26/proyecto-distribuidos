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

// const fetchAllPopularGames = async () => {
//   const resp = await rawgAPI.get("/games", {
//     params: {
//       key: apiKey,
//       ordering: "-added",
//     },
//   });
//   const { results, next, previous } = resp.data;
//   return { juegos: transformJuegos(results), next: next, previous: previous };
// };

// const fetchNextPreviousPage = async (page) => {
//   const resp = await rawgAPI.get(page);
//   const { results, next, previous } = resp.data;
//   return { juegos: transformJuegos(results), next: next, previous: previous };
// };

// export { fetchAllPopularGames, fetchNextPreviousPage };
