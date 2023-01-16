import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { categories } from '../../constants/categories';
import Globe from "react-globe.gl";
import "./Travel.css";

const Travel = () => {
    return (
        <div id="travel">
            <Navbar type={categories.TRAVEL} />
            <Globe height="100vh" width="100vw" globeImageUrl={'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'} />
        </div>
    )
}

export default Travel;