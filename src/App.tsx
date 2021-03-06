import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LoginRedirect from "./components/login/LoginRedirect";
import Champs from "./pages/Champs";
import FavoritesChamps from "./pages/FavoritesChamps";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.positionAppDiv}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champs" element={<Champs />} />
          <Route path="favoritesChamps" element={<FavoritesChamps />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin/callback" element={<LoginRedirect />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
