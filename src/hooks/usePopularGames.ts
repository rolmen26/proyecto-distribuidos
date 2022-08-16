import { useEffect, useState } from "react";
import fetchAllPopularGames from "../helpers/fetchAllPopularGames";
import { Juegos } from "../interfaces/fetchAllGamesResponse";

const usePopularGames = () => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState<Juegos[]>([]);

  useEffect(() => {
    fetchAllPopularGames().then((juegos) => {
      setisLoading(false);
      setJuegos(juegos);
    });
  }, []);
  return {
    isLoading,
    juegos
  };
};

export default usePopularGames;
