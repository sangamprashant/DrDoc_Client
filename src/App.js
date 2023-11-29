import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Hero, NavBar, PageNotFound } from "./component";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
