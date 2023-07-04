import GameSeries from "../classes/GameSeries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameInfo } from "../interfaces/GameInfo";
import { Loading } from "../components/Loading";
import ViewGamesCard from "../components/ViewGamesCard";

const GamesBySeriesView = () => {

    const { serie } = useParams();

    const [isLoading, setisLoading] = useState<boolean>(true);
    const [juegos, setJuegos] = useState<GameInfo[]>();
    const [next, setNextPage] = useState<string>();
    const [previous, setPreviousPage] = useState<string>();

    const gameSeries = new GameSeries();

    console.log(serie)

    useEffect(() => {
        gameSeries.getGamesBySerie(serie).then(({ results, next, previous }) => {
            setisLoading(false);
            setJuegos(results);
            setNextPage(next);
            setPreviousPage(previous);
        })
    }, [serie]);

    const handlePageClick = (page: string) => {
        setisLoading(true);
        gameSeries.fetchNextPrevious(page)
            .then(({ results, next, previous }) => {
                setisLoading(false);
                setJuegos(results);
                setNextPage(next);
                setPreviousPage(previous);
            })
            .catch(() => {
                setisLoading(false);
            });
    };


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="wrapper">
                    {juegos?.map(({ id, name, background_image }) => (
                        <ViewGamesCard
                            key={id}
                            id={id}
                            name={name}
                            background_image={background_image}
                        />
                    ))}
                    {previous && (
                        <button
                            onClick={() => {
                                handlePageClick(previous);
                            }}
                            className="btn__game"
                        >
                            Previous
                        </button>
                    )}
                    {next && (
                        <button
                            onClick={() => {
                                handlePageClick(next);
                            }}
                            className="btn__game"
                        >
                            Next
                        </button>
                    )}
                </div>
            )}
        </>
    );
}

export default GamesBySeriesView;