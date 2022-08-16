import axios from 'axios';

//API key

export const apiKey = 'e4f565ffa1b34bb585cfbe5e70d0f386'

//Base url de la API para realizar las consutlas
export const rawgAPI = axios.create(
  {
    baseURL : 'https://api.rawg.io/api'
  }
);