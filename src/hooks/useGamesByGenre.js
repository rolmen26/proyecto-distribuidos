import { useEffect, useState } from "react";
import {
  fetchAllGamesByGenre,
  fetchNextPreviousPage,
} from "../helpers/fetchAllGamesByGenre";

const useGamesByGenre = (genre) => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    fetchAllGamesByGenre(genre)
      .then(({ juegos, next, previous }) => {
        setisLoading(false);
        setJuegos(juegos);
        setNext(next);
        setPrevious(previous);
      })
      .catch(() => {
        setisLoading(false);
      });
  }, [genre]);

  const handlePageClick = ({ page }) => {
    setisLoading(true);
    fetchNextPreviousPage(page)
      .then(({ juegos, next, previous }) => {
        setisLoading(false);
        setJuegos(juegos);
        setNext(next);
        setPrevious(previous);
      })
      .catch(() => {
        setisLoading(false);
      });
  };

  return {
    isLoading,
    juegos,
    next,
    previous,
    handlePageClick,
  };
};

export default useGamesByGenre;
