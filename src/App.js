import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Contact,
  Footer,
  Home,
  Login,
  NavBar,
  OurProduct,
  PageNotFound,
  Profile,
  Register,
  Upload,
  Verify,
} from "./component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { fetchUserData } from "./ApiCalls";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [isLogged, setIsLogged] = useState(token ? true : false);
  const [LoggedUserData, setLoggedUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (isLogged && token) {
        const userData = await fetchUserData(token);
        console.log(userData)
        setLoggedUserData(userData);
      }
    };
  
    fetchData();
  }, [isLogged, token]);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isLogged, setIsLogged, token, setToken, LoggedUserData }}>
        <NavBar />
        <Routes>
          {/* public */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/product" element={<OurProduct />} />
          {/* private */}
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/upload" element={<Upload />} />

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
