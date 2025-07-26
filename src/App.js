import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";
import { auth } from "./firebase"; // Make sure this path is correct and firebase.js exports 'auth'
import { useAuth } from "./context/GlobalState";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const App = () => {
  const { dispatch } = useAuth();
  const stripePromise = loadStripe(
    "pk_test_51Rp1VC4TrqZJveZfKuUhvEiucDhOQKZnwzfd7sunJ2ylE07k4QIascrJsNsrJYU1nN5fcFTgMjkIHZVH99PyjwYd00WTfwvpWL"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
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
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment/>
              </Elements>
            </>
          }
        />

        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />{" "}
            </>
          }
        />
        <Route path="/Login" element={<Login />} />

        <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>
    </div>
  );
};
export default App;
