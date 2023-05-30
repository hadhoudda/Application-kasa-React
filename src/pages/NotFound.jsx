import "../style/NotFound.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <Header />
            <div className="notfound">
                <p className="number">404</p>
                <p className="txt-notfound">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/"><p className="txt-retour">Retourner sur la page d'accueil</p></Link>

            </div>
            <Footer />
        </>
    );
};

export default NotFound;
