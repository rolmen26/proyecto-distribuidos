import React, { Component } from "react";
//import CardController from "../components/CardController";
import Sidebar from "./Sidebar";
import CardDetailController from "../components/CardDetailController";
import CardView from './CardView'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamesGenres from "../components/GamesGenres";
import SearchGame from "../components/SearchGame";

class MainMenu extends Component {
  render() {
    return (
      <>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<CardView />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default MainMenu;
