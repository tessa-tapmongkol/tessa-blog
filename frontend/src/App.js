import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import { categories } from "./constants/categories";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path={`/${categories.ART}`} />
        <Route path={`/${categories.BOOKS}`} />
        <Route path={`/${categories.PHOTOGRAPHY}`} />
        <Route path={`/${categories.SPIRITUALITY}`} />
        <Route path={`/${categories.TRAVEL}`} />
      </Routes>
    </Router>
  );
}

export default App;
