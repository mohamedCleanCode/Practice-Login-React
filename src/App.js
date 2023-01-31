import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import { ContextProvider } from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <Router>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </ContextProvider>
      </Router>
    </div>
  );
};

export default App;
