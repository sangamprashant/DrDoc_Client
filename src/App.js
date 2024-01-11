import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact, Footer, Home, Login, NavBar, OurProduct, PageNotFound, Register, Verify } from "./component";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/product" element={<OurProduct/>} />
        <Route exact path="/verify/:token" element={<Verify/>} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
      <ToastContainer theme="dark"/>
    </BrowserRouter>
  );
}

export default App;
