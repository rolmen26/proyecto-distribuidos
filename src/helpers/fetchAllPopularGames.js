import { rawgAPI, apiKey } from '../api/rawgAPI'

const fetchAllPopularGames = async () => {
  const resp = await rawgAPI.get('/games', {
    params: {
      key: apiKey,
      ordering: '-added'
    },
    responseType: 'json'
  })
  return resp.data.results;
}

export default fetchAllPopularGames;