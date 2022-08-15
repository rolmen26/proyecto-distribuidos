import React, { Component } from "react";
import CardController from "../components/CardController";
import Sidebar from "./Sidebar";
import CardDetailController from "../components/CardDetailController";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamesGenres from "../components/GamesGenres";
import SearchGame from "../components/SearchGame";
import JuegosPopularesView from "./JuegosPopularesView";

class MainMenu extends Component {
  render() {
    return (
      <>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<JuegosPopularesView />} />
            <Route path="/juego/:id" element={<CardDetailController />} />
            <Route path="/genero/:genre" element={<GamesGenres />} />
            <Route path="/search/:saga" element={<SearchGame />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default MainMenu;
