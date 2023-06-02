import "../style/About.css";
import React from "react";
import questions from "../data/questions.json";
import Collapse from "../components/Collapse";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Header />
            <Banner 
                    content={{
                        imgBan: false
                    }}
                />
            <section className="about-container">
                {questions.map((question) => {
                    return (
                        <Collapse content={question} key={question.id} />
                        );
                    })}
            </section>
            <Footer />
        </>
    );
}

export default About;