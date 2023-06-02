
import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import "../style/Details.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Title from "../components/Title";
import Local from "../components/Local";
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
            <section className="carousel">
                <Carousel locationPictures={location?.pictures} />
            </section>
            <section className="info">
                {/*======== info d'appartement ======== */}
                <div className="info-apartement">
                    <Title locationTitle={location?.title} />
                    <Local locationLocal={location?.location} />
                    <div className="tag-container">
                        {location?.tags?.map((tag, index) => {
                            return <Tag value={tag} key={index} />;
                        })}
                    </div>
                </div>
                {/*======== info de locataire ======== */}
                <div className="host-infos">
                    <Host
                        locationHostPicture={location?.host?.picture}
                        locationHostName={location?.host?.name}
                        />
                    <Rating rating={location?.rating} />
                </div>
            </section>    
            <section className="more-infos">
                <div className="collapse-info">
                    <Collapse
                        content={{
                            title: "Description",
                            reply: location?.description,
                        }}
                    />
                </div>
                <div className="collapse-info">
                    <Collapse
                        content={{
                            title: "Équipements",
                            equipments: location?.equipments,
                        }}
                    />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Details