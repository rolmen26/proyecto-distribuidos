import axios from "axios";

//Variables const
const api_key = "e4f565ffa1b34bb585cfbe5e70d0f386";
const url_principal = "https://api.rawg.io/api";

//Consultas a la API

const getJuegosEspecificos = async () => {
  //Obtenemos el juego
  const juegos = [
    "resident-evil",
    "resident-evil-2",
    "resident-evil-3",
    "resident-evil-4",
    "resident-evil-5-biohazard-5",
  ];
  const response = [];
  for (let i = 0; i < juegos.length; i++) {
    const data = await axios({
      method: "GET",
      url: "/games/" + juegos[i],
      baseURL: url_principal,
      params: {
        key: api_key,
      },
      responseType: "json",
      validateStatus: function (status) {
        return status >= 200 && status < 300;
      },
    });
    response.push(data.data);
  }
  return response;
};

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
export { getPopularGames, getJuegosEspecificos };
