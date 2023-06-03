import '../style/collapse.css';
import React, { useState } from "react";
import ChevronDown from "../assets/Chevron_Down.svg";
import ChevronUp from "../assets/Chevron_Up.svg";

const Collapse = ({ content }) => {
    const [showReply, setShowReply] = useState(false);
    const { title, reply, equipments } = content;
    return (
        <div className={ window.location.pathname =="/about" ? "accordeon"  : "accordeon-id"}>
            <header className="btn-chevron" onClick={() => setShowReply(!showReply)}>
                <h3>{title}</h3>
                <div>
                    {/* Toggle si vrai devient faux si faux devient vrai
                    si showReply est a true alors ChevronUp et montre texte*/}
                    <img
                        src={showReply ? ChevronUp : ChevronDown}
                        alt="close/open"
                        className="chevron"
                    />
                </div>
            </header>
            {showReply && reply && (
                <div className="about-content">
                    <p>{reply}</p>
                </div>
            )}
            {showReply && equipments && (
                <div className="about-content">
                    {equipments.map((equipment, index) => {
                        return (
                            <ul className="list-equipment" key={index}>
                                <li className="list-equipment" >{equipment}</li>
                            </ul> 
                        )
                         
                    })}
                </div>
            )}
        </div>
    );
};

export default Collapse;