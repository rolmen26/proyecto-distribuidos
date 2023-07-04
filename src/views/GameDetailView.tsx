import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../assets/components/Loading";
import ViewGamesCard from "../assets/components/ViewGamesCard";
import GameDetail from "../classes/GameDetails";
import "../assets/scss/GameDetail.scss";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { GameDetails } from "../interfaces/GameDetail";

const GameDetailView = () => {

    const { id } = useParams();

    const [isLoading, setisLoading] = useState<boolean>(true);
    const [game, setGame] = useState<GameDetails>();

    const gameDetails = new GameDetail();

    useEffect(() => {
        gameDetails.getGamesByGenres(id).then((game) => {
            setisLoading(false);
            setGame(game);
        })
    }, [id]);

    return (

        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <div className="game_detail">
                        <header>
                            <button className="go_back" onClick={() => window.history.back()}>
                                <MdArrowBackIos />
                                Regresar
                            </button>
                            <h1>{game?.name}</h1>
                        </header>
                        <section>
                            <div className="game_detail__image">
                                <img src={game?.background_image} alt={game?.name} />
                            </div>
                            <div className="game_detail_info">
                                <div className="game_detail__about">
                                    <h2>Descripción</h2>
                                    <p>{game?.description_raw}</p>
                                </div>
                                <div className="game_detail__questions">
                                    <h2>¿Crees saber mucho sobre {game?.name}?</h2>
                                    <Link to={`/preguntas-game/${game?.id}`}>
                                        <button className="btn btn--primary">Realizar Quiz</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}

export default GameDetailView;