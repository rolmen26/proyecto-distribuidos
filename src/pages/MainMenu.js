import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularGamesView from "./PopularGamesView";
import GameDetailView from "./GameDetailView";
import GamesByGenderView from "./GamesByGenderView";
import GamesBySeriesView from "./GamesBySeriesView";
import TrendingGamesView from "./TrendingGames";
import GameQuestionView from "./GameQuestionView";

const MainMenu = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<PopularGamesView />} />
          <Route path="/juego/:id" element={<GameDetailView />} />
          <Route path="/genero/:genre" element={<GamesByGenderView />} />
          <Route path="/saga/:serie" element={<GamesBySeriesView />} />
          <Route path="/trending" element={<TrendingGamesView />} />
          <Route path="/preguntas-juego/:id" element={<GameQuestionView />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainMenu;
