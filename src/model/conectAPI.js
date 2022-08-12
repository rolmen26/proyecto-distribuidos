import axios from "axios";

//Variables const
const api_key = "e4f565ffa1b34bb585cfbe5e70d0f386";
const url_principal = "https://api.rawg.io/api";

//Consultas a la API

async function getPopularGames() {
  await axios({
    method: "GET",
    url: "/games/",
    baseURL: url_principal,
    params: {
      key: api_key,
    },
    responseType: "json",
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (res) {
      console.log(res);
    });
}

async function getJuego(nameJuego) {
  //Obtenemos el juego
  await axios({
    method: "GET",
    url: "/games/" + nameJuego,
    baseURL: url_principal,
    params: {
      key: api_key,
    },
    responseType: "json",
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  })
    .then(function (response) {
      //console.log(response.data);
    })
    .catch(function (res) {
      console.log("Error: " + res);
    });
}

export { getJuego, getPopularGames };
