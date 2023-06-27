import { useEffect, useState } from "react";
import fetchGameById from "../helpers/fetchGameById";

const useGameById = (id) => {
  const [isLoading, setisLoading] = useState(true);
  const [juego, setJuego] = useState();

  useEffect(() => {
    fetchGameById(id).then((juego) => {
      setisLoading(false);
      setJuego(juego);
    });
  }, [id]);

  return {
    isLoading,
    juego,
  };
};

export default useGameById;
