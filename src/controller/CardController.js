import { Children, Component } from "react";
import { Juego } from "./Juego";
import CardView from "../view/CardView";
import { getJuegoEspecificoById, getPopularGames } from "../api/ConectaAPI";

class CardController extends Component {
  state = {
    juegos: [],
  };

  ObtenerJuegos = async () => {
    const juegos = await getPopularGames();
    const juegosJson = juegos.map((juego) => {
      return new Juego(
        juego.id,
        juego.name,
        juego.description_raw,
        juego.background_image,
        juego.alternative_names,
        juego.released,
        juego.genres,
        juego.platforms,
        juego.developers,
        juego.publishers
      );
    });
    this.setState({ juegos: juegosJson });
  };

  componentDidMount() {
    this.ObtenerJuegos();
  }

  onClick = (props) => {
    console.log(props.id);
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.juegos.map((juego) => {
          return (
            <CardView
              onClick={() => this.onClick(juego)}
              id={juego.id}
              key={juego.id}
              img={juego.background_image}
              title={juego.name}
            />
          );
        })}
      </div>
    );
  }
}

export default CardController;
