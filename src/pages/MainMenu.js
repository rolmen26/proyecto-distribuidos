import React, { Component } from "react";
import Sidebar from "./Sidebar";
import GameDetailView from "./GameDetailView";
import PopularGamesView from "./PopularGamesView";
import GamesByGenderView from "./GamesByGanderView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamesBySeriesView from "./GamesBySeriesView";

class MainMenu extends Component {
  render() {
    return (
      <>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<PopularGamesView />} />
            <Route path="/juego/:id" element={<GameDetailView />} />
            <Route path="/genero/:genre" element={<GamesByGenderView />} />
            <Route path="/saga/:serie" element={<GamesBySeriesView />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default MainMenu;
