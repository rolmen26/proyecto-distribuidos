import React, { Component } from "react";
import CardController from "../controller/CardController";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CardDetailController from '../controller/CardDetailController'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamesGenres from "../controller/GamesGenres";

class MainMenu extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="content">
              <Routes>
                <Route path="/" element={<CardController />} />
                <Route path="/juego/:id" element={<CardDetailController  />} />
                <Route path="/genero/:genre" element={<GamesGenres  />} />
              </Routes>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default MainMenu;
