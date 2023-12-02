import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact, Footer, Home, Login, NavBar, PageNotFound, Register } from "./component";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
