import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { categories } from "../../constants/categories";

const TravelPost = (props) => {
    return (
        <>
            <Navbar type={categories.TRAVEL} />
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div>{props.body}</div>
        </>
    )
}

export default TravelPost;