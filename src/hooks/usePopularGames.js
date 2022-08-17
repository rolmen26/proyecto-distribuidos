import { useEffect, useState } from "react";
import fetchAllPopularGames from "../helpers/fetchAllPopularGames";

const usePopularGames = () => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState([]);

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
