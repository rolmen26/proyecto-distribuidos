import { useState, useEffect } from "react";
import { fetchAllPopularGames } from '../helpers/fetchAllPopularGames';
import { Juegos } from '../interfaces/FetchAllPopularGamesResponse';


export const usePopularGames = () => {


    const [isLoading, setIsLoading] = useState(true);

    const [popularGames, setPopularGames] = useState<Juegos[]>([]);

    useEffect(() => {
        fetchAllPopularGames().then(juegos => {
            setIsLoading(false);
            setPopularGames(juegos);
        })
    }, [])

    return {
        isLoading,
        popularGames
    }
}
