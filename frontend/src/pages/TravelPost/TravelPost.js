import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { categories } from '../../constants/categories';

// Will use formatting package thing

const TravelPost = (props) => {
    return (
        <>
            <Navbar type={categories.TRAVEL} />
            <h1>{props.title}</h1>
            {props.images.map(image => {
                return <img src={image.url} alt={image.url} />
            })}
            <p>{props.body}</p>
        </>
    )
}

export default TravelPost;