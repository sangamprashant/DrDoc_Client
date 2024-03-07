import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "component-craftsman/css";
import {
  AccountSwitch,
  Contact,
  EditProfile,
  Footer,
  Home,
  Login,
  Message,
  NavBar,
  PageNotFound,
  Profile,
  Register,
  Search,
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
      <AuthContext.Provider value={{ isLogged, setIsLogged, token, setToken, LoggedUserData,setLoggedUserData }}>
        <NavBar />
        <Routes>
          {/* public */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<Contact />} /> 
          {/* private */}
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/edit" element={<EditProfile />} />
          <Route exact path="/accountSwitch" element={<AccountSwitch />} />
          <Route exact path="/message" element={<Message />} />

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
