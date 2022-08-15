import CardView from "../pages/CardView";
import { Link } from "react-router-dom";
import { usePopularGames } from "../hooks/usePopularGames";

const JuegosPopularesView = () => {

    const { isLoading, juegos } = usePopularGames();

    return (
        <>
            <div className="wrapper">
                {juegos &&
                    juegos.map((juego) => (
                        <Link
                            className="link__game"
                            key={juego.id}
                            to={`/juego/${juego.id}`}
                        >
                            <CardView
                                key={juego.id}
                                id={juego.id}
                                title={juego.name}
                                img={juego.background_image}
                            />
                        </Link>
                    ))}
            </div>
        </>
    );
};

export default JuegosPopularesView;
