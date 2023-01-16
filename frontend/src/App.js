import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/art" />
        <Route path="/books" />
        <Route path="/photography" />
        <Route path="/spirituality" />
        <Route path="/travel" />
      </Routes>
    </Router>
  );
}

export default App;
