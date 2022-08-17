import { Route, Routes, useLocation } from "react-router-dom";
import PopularGamesView from "../pages/PopularGamesView";
import GameDetailView from "../pages/GameDetailView";
import GamesByGenderView from "../pages/GamesByGenderView";
import GamesBySeriesView from "../pages/GamesBySeriesView";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

function AnimatedTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PopularGamesView />} />
        <Route path="/juego/:id" element={<GameDetailView />} />
        <Route path="/genero/:genre" element={<GamesByGenderView />} />
        <Route path="/saga/:serie" element={<GamesBySeriesView />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedTransitions;
