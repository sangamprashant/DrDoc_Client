import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "component-craftsman/css";
import {
  AccountSwitch,
  ChangePassword,
  Contact,
  EditProfile,
  Footer,
  Home,
  Login,
  Message,
  MyDoctor,
  NavBar,
  PageNotFound,
  Profile,
  Register,
  Search,
  Upload,
  Verify,
} from "./component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthContext";
import React, { useEffect, useState } from "react";
import { fetchUserData } from "./ApiCalls";
import { Modal } from "antd";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [isLogged, setIsLogged] = useState(token ? true : false);
  const [LoggedUserData, setLoggedUserData] = useState(null);
  // model
  const [modal2Open, setModal2Open] = React.useState(false);
  const [modelType, setModelType] = React.useState("error");
  const [modelMessage, setModelMessgae] = React.useState(null);
  const getModalColor = () => {
    switch (modelType) {
      case "Warning":
        return "orange";
      case "Error":
        return "red";
      case "Success":
        return "green";
      default:
        return "blue";
    }
  };

  React.useLayoutEffect(() => {
    const fetchData = async () => {
      if (isLogged && token) {
        const userData = await fetchUserData(token);
        if (userData.isDoctor) {
          sessionStorage.clear();
          setModelType ("Warning");
          setModelMessgae("Only users are allowed lo login.");
          setModal2Open(true);
          setIsLogged(false);
        }
        setLoggedUserData(userData);
      }
    };

    fetchData();
  }, [isLogged, token]);

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          isLogged,
          setIsLogged,
          token,
          setToken,
          LoggedUserData,
          setLoggedUserData,
          setModal2Open,
          setModelType,
          setModelMessgae,
        }}
      >
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
          <Route exact path="/mydoctor" element={<MyDoctor />} />
          <Route exact path="/change/password" element={<ChangePassword />} />

          <Route exact path="/verify/:token" element={<Verify />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
      <ToastContainer theme="dark" />
      <Modal
        title={modelType}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        style={{ color: getModalColor() }}
      >
        {modelMessage}
      </Modal>
    </BrowserRouter>
  );
}

export default App;
