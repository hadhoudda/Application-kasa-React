import React from "react";
import "../style/Rates.css";
import greyStar from "../assets/grey_star.png";
import redStar from "../assets/red_star.png";

const Rating = ({ rating }) => {
    //const arr =[1, 2, 3, 4, 5]   ==============  [...Array(5)]
    return (
        // Map sur le tableau contenant 5 étoiles
        <div className="star-container">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img
                        className="starSize"
                        key={index}
                        src={ratingValue <= rating ? redStar : greyStar}
                        alt="star"
                    />
                );
            })}
        </div>
    );
};

export default Rating;
