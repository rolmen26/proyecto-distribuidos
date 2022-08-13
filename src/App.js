import "../src/view/MainMenu";
import MainMenu from "../src/view/MainMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetailController from "./controller/CardDetailController";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
      <Routes>
        <Route path="/juego/:id" element={<CardDetailController />} />
      </Routes>
    </Router>
  );
}

export default App;
