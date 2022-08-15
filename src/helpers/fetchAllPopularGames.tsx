import { rawgAPI, apiKey } from '../api/rawgAPI';
import { FetchAllPopularGamesResponse, Juegos } from '../interfaces/FetchAllPopularGamesResponse';
export const fetchAllPopularGames = async (): Promise<Juegos[]> => {

    const resp = await rawgAPI.get<FetchAllPopularGamesResponse>('/games', {
        params: {
            key: apiKey,
            ordering: "-added",
            page_size: 20
        },
        responseType: 'json'
    })
    const juegos = resp.data.results;

    return transformJuegos(juegos);
}

const transformJuegos = (juegos: Juegos[]): Juegos[] => {

    const juegosArrary: Juegos[] = juegos.map(juego => {
        return {
            id: juego.id,
            name: juego.name,
            background_image: juego.background_image
        }
    })

    console.log(juegosArrary);

    return juegosArrary;
}