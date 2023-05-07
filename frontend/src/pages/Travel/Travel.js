import "./Travel.css";
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { categories } from '../../constants/categories';
import Globe from "react-globe.gl";
import { posts } from '../../posts/post';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const Travel = () => {
    const [details, setDetails] = React.useState();
    const [show, setShow] = React.useState();

    const onClickMarker = React.useCallback(
        (d) => {
            setShow(true);
            setDetails(d);
        },
        [setShow]
    )

    return (
        <div id="travel">
            <Navbar type={categories.TRAVEL} />
            <Globe
                height="100vh"
                width="100vw"
                globeImageUrl={'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'}
                htmlElementsData={posts}
                htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = markerSvg;
                    el.style.color = d.color;
                    el.style.width = `${d.size}px`;
                    el.style['pointer-events'] = 'auto';
                    el.style.cursor = 'pointer';
                    el.onclick = () => onClickMarker(d);
                    return el;
                  }}
            />
            {show && details && (
                <div className="markerPopup">
                    <div className="markupTopRow">
                        <div className="markerTopRowFeat">
                            <h1 id="markerTitle">{details.title}</h1>   
                            <img className="markerPic" src={details.featuredPic} alt="featuredPic" />
                        </div>
                        <div onClick={() => setShow(false)} id="markerPopupX">
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <p>{details.subtitle}</p>
                    <Link exact to={`${details.title}`}>go to post</Link>
                </div>
            )}
        </div>
    )
}

export default Travel;