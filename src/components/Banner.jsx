import "../style/Banner.css";
import React from "react";
import imgHome from "../assets/vague.webp";
import imgAbout from "../assets/nature.webp";

function Banner({ content }) {
    const {imgBan ,title} = content ;
    return (
        <div className={ window.location.pathname =="/" ? "banner-home"  : "banner"} >
            <h1 className="title-header">{title}</h1>
            <img
                className="img-header"
                src={imgBan ? imgHome : imgAbout}
                alt={imgBan ? "vague" : "nature"}
            />

        </div>
    );
}
export default Banner;
