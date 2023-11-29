import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, NavBar, PageNotFound } from "./component";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
