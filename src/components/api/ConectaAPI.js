import axios from "axios";

//Variables const
const api_key = "e4f565ffa1b34bb585cfbe5e70d0f386";
const url_principal = "https://api.rawg.io/api";

//Consultas a la API

const getPopularGames = async () => {
  const data = await axios({
    method: "GET",
    url: "/games",
    baseURL: url_principal,
    params: {
      key: api_key,
      ordering: "-added",
      page_size: 20,
    },
    responseType: "json",
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });
  return data.data.results;
};

const getJuegoEspecificoById = async (id) => {
  const data = await axios({
    method: "GET",
    url: `/games/${id}`,
    baseURL: url_principal,
    params: {
      key: api_key,
    },
    responseType: "json",
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });
  return data.data;
};

const getJuegosByGenre = async (genre) => {
  const data = await axios({
    method: "GET",
    url: `/games`,
    baseURL: url_principal,
    params: {
      key: api_key,
      genres: genre,
    },
    responseType: "json",
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });
  return data.data.results;
};

export { getPopularGames, getJuegoEspecificoById, getJuegosByGenre };
