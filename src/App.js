import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/login";
import { useEffect } from "react";
import { auth } from "./firebase"; // Make sure this path is correct and firebase.js exports 'auth'
import { useAuth } from "./context/GlobalState";
const App = () => {
  const { dispatch } = useAuth();

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
        <Route path="/" element={<><Header /></>} />
        <Route path="/Login" element={<Login/>} />

        <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>
    </div>
  );
};
export default App;
