import { useEffect, useState } from "react";
import fetchGameById from "../helpers/fetchGameById";
import { Juego } from "../interfaces/fetchAllGamesResponse";

const useGameById = (id: number) => {
  const [isLoading, setisLoading] = useState(true);
  const [juego, setJuego] = useState<Juego>();

  useEffect(() => {
    fetchGameById(id).then((juego) => {
      setisLoading(false);
      setJuego(juego);
    });
  }, [id]);

  return {
    isLoading,
    juego
  };
};

export default useGameById;
