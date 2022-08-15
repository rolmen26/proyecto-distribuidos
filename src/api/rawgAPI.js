import axios from 'axios'

export const apiKey = 'e4f565ffa1b34bb585cfbe5e70d0f386';

export const rawgAPI = axios.create(
    {
        baseURL: 'https://api.rawg.io/api'
    }
)