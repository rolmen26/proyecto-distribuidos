import TrendingGames from "../classes/TrendingGames";
import { useEffect, useState } from "react";
import { GameInfo } from "../interfaces/GameInfo";
import { Loading } from "../assets/components/Loading";
import ViewGamesCard from "../assets/components/ViewGamesCard";

const TrendingGamesView = () => {

    const [isLoading, setisLoading] = useState<boolean>(true);
    const [juegos, setJuegos] = useState<GameInfo[]>();
    const [next, setNextPage] = useState<string>();
    const [previous, setPreviousPage] = useState<string>();

    const trendingGames = new TrendingGames();

    useEffect(() => {
        trendingGames.getTrendingGames().then(({ results, next, previous }) => {
            setisLoading(false);
            setJuegos(results);
            setNextPage(next);
            setPreviousPage(previous);
        })
    }, []);

    const handlePageClick = (page: string) => {
        setisLoading(true);
        trendingGames.fetchNextPrevious(page)
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

export default TrendingGamesView;