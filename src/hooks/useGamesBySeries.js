import { useEffect, useState } from "react";
import fetchAllGamesBySeries from "../helpers/fetchAllGamesBySeries";

const useGamesBySeries = (name) => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    fetchAllGamesBySeries(name).then((juegos) => {
      setisLoading(false);
      setJuegos(juegos);
    });
  }, [name]);
  return {
    isLoading,
    juegos,
  };
};

export default useGamesBySeries;
