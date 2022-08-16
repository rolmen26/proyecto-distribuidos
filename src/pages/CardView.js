import React from "react";
import usePopularGames from '../hooks/usePopularGames'

const CardView = () => {
  const { isLoading, juegos } = usePopularGames();
}

export default CardView;