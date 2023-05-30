import logo_black from "../assets/logo_black.webp";
import "../style/Footer.css";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer>
            <Link to="/"><img src={logo_black} className="logo-footer" alt="logo de kasa"/></Link>
            <p className="txt-footer"> @ 2020 Kasa. All rights reserved </p>
        </footer>
    );
}
export default Footer;
