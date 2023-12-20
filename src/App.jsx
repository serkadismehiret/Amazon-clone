import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
// import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./Components/StateProvider";
import { db, auth } from "../Firebase";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";



let promise = loadStripe(
  "pk_test_51OMg3bCMjNN6OoMElEquPErN0kFsiSTEGT3BUNsJBz4EeRHQFL5TeWCWw0juNQ0YlN3NzqBj7yfQturGHLAT3Mku008JPQJbZ4"
);

function App() {
  let [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user:authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[]);

  return (
    <div className="App">
      <Routes>

        <Route path="/login" element={<Login />} />
        
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/Checkout"
          element={
            <>
              <Header /> <Checkout />
            </>
          }
        />
<Route path="/orders" element={<><Header /><Orders />
</>} />
      </Routes>
    </div>
  );
}

export default App;
