import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Champs from "./pages/Champs";
import FavoritesChamps from "./pages/FavoritesChamps";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.positionAppDiv}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champs" element={<Champs />} />
          <Route path="favoritesChamps" element={<FavoritesChamps />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
