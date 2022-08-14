import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGameSeriesByName } from "../api/ConectaAPI";
import CardView from "../pages/CardView";
import { Link } from "react-router-dom";

const SearchGame = () => {
  const { saga } = useParams();
  const [games, setGames] = React.useState([]);

  useEffect(() => {
    async function getGamesBySaga() {
      const juegos = await getGameSeriesByName(saga);
      setGames(juegos);
    }
    getGamesBySaga();
  }, [saga]);

  return (
    <>
      <div className="wrapper">
        {games &&
          games.map((game) => (
            <Link className="link__game" key={game.id} to={`/juego/${game.id}`}>
              <CardView
                key={game.id}
                id={game.id}
                title={game.name}
                img={game.background_image}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default SearchGame;
