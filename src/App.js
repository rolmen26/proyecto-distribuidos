import "./components/view/MainMenu";
import MainMenu from './components/view/MainMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetailController from "./components/controller/CardDetailController";
import CardController from "./components/controller/CardController";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/juego/:id" element={<CardDetailController />} />
      </Routes>
    </Router>
  );
}

export default App;
