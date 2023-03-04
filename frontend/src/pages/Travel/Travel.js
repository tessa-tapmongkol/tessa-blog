import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { categories } from '../../constants/categories';
import Globe from "react-globe.gl";
import "./Travel.css";

const N = 30;
const exampleData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: 7 + Math.random() * 30,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
}));

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const Travel = () => {
    return (
        <div id="travel">
            <Navbar type={categories.TRAVEL} />
            <Globe
                height="100vh"
                width="100vw"
                globeImageUrl={'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'}
                htmlElementsData={exampleData}
                htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = markerSvg;
                    el.style.color = d.color;
                    el.style.width = `${d.size}px`;
                    el.style['pointer-events'] = 'auto';
                    el.style.cursor = 'pointer';
                    el.onclick = () => console.info(d);
                    return el;
                  }}
            />
        </div>
    )
}

export default Travel;