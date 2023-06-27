import "./scss/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularGamesView from "../src/pages/PopularGamesView";
import GameDetailView from "../src/pages/GameDetailView";
import GamesByGenderView from "../src/pages/GamesByGenderView";
import GamesBySeriesView from "../src/pages/GamesBySeriesView";
import TrendingGamesView from "../src/pages/TrendingGamesView";
import GameQuestionView from "../src/pages/GameQuestionView";
import Sidebar from "./components/Sidebar";

function App() {
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
}

export default App;