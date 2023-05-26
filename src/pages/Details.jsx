import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import "../style/Details.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

import Carousel from "../components/Carousel";
import Title from "../components/Title";
import Host from "../components/Host";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import NotFound from "./NotFound";

const Details = () => {
    let userId = useParams();
    const [location, setLocation] = useState([0]);

    const getData = async () => {
        const response = await fetch("../data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const cards = await response.json();
        const location = cards.find((card) => card.id === userId.id);
        setLocation(location);
        //console.log(imgPrev)
    };

    useEffect(() => {
        getData();
    },[]);

    if (!location) {
        return <NotFound />;
    }

    return (
        <>
            <Header />
            <div className="carousel">
                <Carousel locationPictures={location?.pictures} />
            </div>

            <Title locationTitle={location?.title} />
            <div className="host-infos">
                <div>
                    <Rating rating={location?.rating} />
                </div>
                <Host
                    locationHostPicture={location?.host?.picture}
                    locationHostName={location?.host?.name}
                />
            </div>
            <div className="tag-container">
                {location?.tags?.map((tag, index) => {
                    return <Tag value={tag} key={index} />;
                })}
            </div>
            {/*<Description locationDescription={location?.description} />*/}
            <div className="more-infos">
                <Collapse
                    content={{
                        title: "Description",
                        reply: location?.description,
                    }}
                />
                <Collapse
                    content={{
                        title: "Équipements",
                        equipments: location?.equipments,
                    }}
                />
            </div>
            <Footer />
        </>
    );
};

export default Details;
