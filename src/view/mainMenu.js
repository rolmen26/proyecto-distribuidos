import { React } from "react";
import { Card } from "./Card";
import "../scss/Card.scss";

function MainMenu() {
  return (
    <div className="main-menu">
      <h1>Main Menu of the Quiz</h1>
      <div className="wrapper">
        <Card
          img="https://image.api.playstation.com/vulcan/ap/rnd/202010/0501/ph4tgwDaQqHkj84fKrGjye8D.png"
          title="Metal Gear Solid V: The Phantom Pain"
          description="Metal Gear Solid V: The Phantom Pain is a 2017 action-adventure video game developed by Kojima Productions and published by Square Enix for the PlayStation 4."
        />
      </div>
    </div>
  );
}

export default MainMenu;
