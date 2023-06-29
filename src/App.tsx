import "./scss/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularGamesView from "./views/PopularGamesView"
import GameDetailView from "../src/pages/GameDetailView";
import GamesByGenderView from "../src/pages/GamesByGenderView";
import GamesBySeriesView from "../src/pages/GamesBySeriesView";
import TrendingGamesView from "../src/pages/TrendingGamesView";
import GameQuestionView from "../src/pages/GameQuestionView";
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
          {/* <Route path="/juego/:id" element={<GameDetailView />} />
          <Route path="/genero/:genre" element={<GamesByGenderView />} />
          <Route path="/saga/:serie" element={<GamesBySeriesView />} />
          <Route path="/trending" element={<TrendingGamesView />} />
          <Route path="/preguntas-juego/:id" element={<GameQuestionView />} /> */}
        </Routes>
      </Router>
    </React.Fragment>
    </div>
    
  );
}

export default App;