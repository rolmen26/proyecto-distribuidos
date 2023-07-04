import "./scss/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularGamesView from "./views/PopularGamesView"
import TrendingGamesView from "./views/TrendingGamesViews";
import GamesByGenresView from "./views/GamesByGenresView"
import GamesBySeriesView from "./views/GamesBySeriesView"
import Sidebar from "./components/Sidebar";
import React from "react";

const App = () => {
  return (
    <div>
      <React.Fragment>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<PopularGamesView />} />
            <Route path="/trending" element={<TrendingGamesView />} />
            <Route path="/saga/:serie" element={<GamesBySeriesView />} />
            <Route path="/genero/:genre" element={<GamesByGenresView />} />
            {/* <Route path="/juego/:id" element={<GameDetailView />} />
          <Route path="/preguntas-juego/:id" element={<GameQuestionView />} /> */}
          </Routes>
        </Router>
      </React.Fragment>
    </div>

  );
}

export default App;