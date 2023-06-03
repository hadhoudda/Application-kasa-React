import "../style/NotFound.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <Header />
            <section className="notfound">
                <p className="number">404</p>
                <p className="txt-notfound">Oups! La page que vous demandez n&rsquo;existe pas.</p>
                <Link to="/"><p className="txt-retour">Retourner sur la page d&rsquo;accueil</p></Link>

            </section>
            <Footer />
        </>
    );
};

export default NotFound;