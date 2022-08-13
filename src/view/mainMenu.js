import React, { Component } from "react";
import CardController from "../controller/CardController";
import "../scss/Card.scss";

class MainMenu extends Component {
  render() {
    return (
      <div className="main_menu">
        <h1>Main Menu of the Quiz</h1>
          <CardController />
      </div>
    );
  }
}

export default MainMenu;
