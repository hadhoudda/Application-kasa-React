<<<<<<< HEAD
import React, { useState } from "react";
import ChevronDown from "../assets/Chevron_Down.svg";
import ChevronUp from "../assets/Chevron_Up.svg";

const Collapse = ({ content }) => {
    const [showReply, setShowReply] = useState(false);
    const { title, reply, equipments } = content;
    return (
        <div className="accordeon">
            <header className="accordeon-header">
                <h3>{title}</h3>
                <button
                    className="btn-chevron"
                    // Toggle si vrai devient faux si faux devient vrai
                    onClick={() => setShowReply(!showReply)}
                    // Si montrer texte alors ChevronUp
                >
                    {/* si showReply est a true */}
                    <img
                        src={showReply ? ChevronUp : ChevronDown}
                        alt="close/open"
                        className="chevron"
                    />
                </button>
            </header>
            {showReply && reply && (
                <div className="about-content">
                    <p>{reply}</p>
                </div>
            )}
            {showReply && equipments && (
                <div className="about-content">
                    {equipments.map((equipment, index) => {
                        return <span key={index}>{equipment}</span>;
                    })}
                </div>
            )}
        </div>
    );
};

export default Collapse;
=======
import React,{ useState} from 'react';
import '../style/collapse.css';

const Collapse = ({titleCollapse}, {txtCollapse}) =>{
      
        const [isOpen, setIsOpen] = useState(false)
     
        return isOpen ? (
            <div className='lmj-cart'>
                <i className="fa-sharp fa-solid fa-angle-up" onClick={() => setIsOpen(false)}></i>
                <div>
                    <h3> {titleCollapse} </h3>
                    <p> {txtCollapse} </p>
                </div>
            </div>
        ) : (
            <i className="fa-solid fa-angle-down" onClick={() => setIsOpen(true)}></i>
            

        )
    }


export default Collapse
>>>>>>> 49fb625b8af0ce985187120c9781108785c439e7
