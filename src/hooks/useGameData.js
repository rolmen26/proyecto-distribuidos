import { useEffect, useState } from "react";
import fetchGameData from "../helpers/fetchGameData";

const useGameData = (id) => {
  const [isLoading, setisLoading] = useState(true);
  const [juego, setJuego] = useState();

  useEffect(() => {
    fetchGameData(id).then((juego) => {
      setisLoading(false);
      setJuego(juego);
    });
  }, [id]);

  return {
    isLoading,
    juego,
  };
};

export default useGameData;
