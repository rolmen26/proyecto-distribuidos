import { useEffect, useState } from "react";
import fetchAllGamesBySeries from "../helpers/fetchAllGamesBySeries";
import { Juegos } from "../interfaces/fetchAllGamesResponse";

const useGamesBySeries = (name: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState<Juegos[]>([]);

  useEffect(() => {
    fetchAllGamesBySeries(name).then((juegos) => {
      setisLoading(false);
      setJuegos(juegos);
    });
  }, [name]);
  return {
    isLoading,
    juegos
  };
};

export default useGamesBySeries;
