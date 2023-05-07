import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { categories } from "./constants/categories";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Travel from "./pages/Travel/Travel";
import CreatePost from "./pages/CreatePost/CreatePost";
import { places, thailand } from "./posts/post";
import ThailandPost from "./posts/travel/thailand/ThailandPost";
import TravelPost from "./posts/travel/TravelPost";

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
        <Route path={`/${categories.TRAVEL}`} element={<Travel />} />
        <Route path={`/${categories.CREATEPOST}`} element={<CreatePost />} />
        <Route path={`/${categories.TRAVEL}/${places.THAILAND}`} element={<TravelPost title={thailand.title} subtitle={thailand.subtitle} body={<ThailandPost />} />} />
      </Routes>
    </Router>
  );
}

export default App;
