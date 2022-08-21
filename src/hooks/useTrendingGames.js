import { useEffect, useState } from "react";
import fetchTrendingGames from "../helpers/fetchAllTrendingGames";

const useTrendingGames = () => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    fetchTrendingGames().then((juegos) => {
      setisLoading(false);
      setJuegos(juegos);
    });
  }, []);
  return {
    isLoading,
    juegos,
  };
};

export default useTrendingGames;
