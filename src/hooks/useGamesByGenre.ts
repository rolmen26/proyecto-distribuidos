import { useEffect, useState } from "react";
import fetchAllGamesByGenre from "../helpers/fetchAllGamesByGenre";
import { Juegos } from "../interfaces/fetchAllGamesResponse";

const useGamesByGenre = (genre: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState<Juegos[]>([]);

  useEffect(() => {
    fetchAllGamesByGenre(genre).then((juegos) => {
      setisLoading(false);
      setJuegos(juegos);
    });
  }, [genre]);
  return {
    isLoading,
    juegos
  };
};

export default useGamesByGenre;
