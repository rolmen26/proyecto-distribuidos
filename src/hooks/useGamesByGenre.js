import { useEffect, useState } from "react";
import fetchAllGamesByGenre from "../helpers/fetchAllGamesByGenre";

const useGamesByGenre = (genre) => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState([]);

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
