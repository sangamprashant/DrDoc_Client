import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {Contact, Footer, Home, Login, NavBar, OurProduct, PageNotFound, Register, Verify} from "./component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

function App() {

  const [isLogged, setIsLogged] = useState(sessionStorage.getItem("token")?true:false)

  console.log(isLogged)

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isLogged, setIsLogged}}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/product" element={<OurProduct />} />
          <Route exact path="/verify/:token" element={<Verify />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
