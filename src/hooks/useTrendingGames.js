import { useEffect, useState } from "react";
import {
  fetchTrendingGames,
  fetchNextPreviousPage,
} from "../helpers/fetchAllTrendingGames";

const useTrendingGames = () => {
  const [isLoading, setisLoading] = useState(true);
  const [juegos, setJuegos] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    fetchTrendingGames().then(({ juegos, next, previous }) => {
      setisLoading(false);
      setJuegos(juegos);
      setNext(next);
      setPrevious(previous);
    });
  }, []);

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

export default useTrendingGames;
