import React, { Component } from "react";
import { Card } from "./Card";
import { Juego } from "../controller/Juego";
import "../scss/Card.scss";
import { getJuegosEspecificos } from "../model/ConectaAPI";

class MainMenu extends Component {
  state = {
    juegos: [],
  };

  ObtenerJuegos = async () => {
    const juegos = await getJuegosEspecificos();
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

  renderJuegos() {
    return this.state.juegos.map((juego) => {
      return (
        <Card
          key={juego.id}
          img={juego.background_image}
          title={juego.name}
        />
      );
    });
  }

  render() {
    return (
      <div className="main-menu">
        <h1>Main Menu of the Quiz</h1>
        <div className="wrapper">{this.renderJuegos()}</div>
      </div>
    );
  }
}

export default MainMenu;
