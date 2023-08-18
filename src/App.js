import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// Component
import Header from "./component/Header"
import Home from "./component/Home";
import Login from "./component/Login";
import Checkout from "./component/Checkout";
import { useAuth } from "./context/GlobalState";
import { auth } from "./firebase";
import Payment from "./component/Payment";

const App = () => {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<><Header /> <Home/></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<><Header /> <Checkout/></>} />
        <Route path="/payment" element={<><Header /> <Payment/></>} />

        <Route path="*" element={<h1>Not Found Pages</h1>} />
      </Routes>
    </>
  );
};

export default App;
