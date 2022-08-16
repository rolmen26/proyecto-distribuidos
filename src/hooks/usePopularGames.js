import { useEffect, useState } from "react"
import fetchAllPopularGames from '../helpers/fetchAllPopularGames'

const usePopularGames = () => {

  const [isLoading, setisLoading] = useState(true)
  const [juegos, setJuegos] = useState([])

  useEffect(() => {
    fetchAllPopularGames();
  }, [])
  return {
    isLoading,
    juegos
  }
}

export default usePopularGames;