import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { categories } from '../../constants/categories';
import ReactGlobe from "react-globe";

const Travel = () => {
    return (
        <>
            <Navbar type={categories.TRAVEL} />
            <ReactGlobe height="100vh" width="100vw" />
        </>
    )
}

export default Travel;