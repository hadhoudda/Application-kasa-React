import logo from "../assets/logo.webp";
import "../style/Header.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="img-logo">
                <Link to="/Application-kasa-React"><img src={logo} className="logo" alt="logo de kasa"/></Link>
            </div>
            <nav className="navbar">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-active nav-link" : "nav-link"
                    }
                    end="/"
                    to="/Application-kasa-React"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-active nav-link" : "nav-link"
                    }
                    end="about"
                    to="/Application-kasa-React/about"
                >
                    {" "}
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;