import "./App.css";
import SerieCard from "./Component/MovieCard";
import DescTrailer from "./Component/DescTrailer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SerieCard />} />
          <Route path="DescTrailer/:movieN" element={<DescTrailer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
