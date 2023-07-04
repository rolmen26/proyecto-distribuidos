import PopularGames from '../classes/PopularGames'
import { useEffect, useState } from 'react'
import { type GameInfo } from '../interfaces/GameInfo'
import { Loading } from '../assets/components/Loading'
import ViewGamesCard from '../assets/components/ViewGamesCard'

const PopularGamesView = () => {
  const [isLoading, setisLoading] = useState<boolean>(true)
  const [juegos, setJuegos] = useState<GameInfo[]>()
  const [next, setNextPage] = useState<string>()
  const [previous, setPreviousPage] = useState<string>()

  const popularGames = new PopularGames()

  useEffect(() => {
    popularGames.getPopularGames().then(({ results, next, previous }) => {
      setisLoading(false)
      setJuegos(results)
      setNextPage(next)
      setPreviousPage(previous)
    })
  }, [])

  const handlePageClick = (page: string) => {
    setisLoading(true)
    popularGames
      .fetchNextPrevious(page)
      .then(({ results, next, previous }) => {
        setisLoading(false)
        setJuegos(results)
        setNextPage(next)
        setPreviousPage(previous)
      })
      .catch(() => {
        setisLoading(false)
      })
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          {juegos?.map(({ id, name, background_image }) => (
            <ViewGamesCard key={id} id={id} name={name} background_image={background_image} />
          ))}
          {previous && (
            <button
              onClick={() => {
                handlePageClick(previous)
              }}
              className="btn__game"
            >
              Previous
            </button>
          )}
          {next && (
            <button
              onClick={() => {
                handlePageClick(next)
              }}
              className="btn__game"
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default PopularGamesView
