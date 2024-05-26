import React from "react";

export default function Card({ id, title, description, icon }) {


const checkClassName = () =>{
if (id == 1){return "card-container supervisor"}
else if (id == 2){return "card-container team-builder"}
else if (id == 3){return "card-container karma"}
else if (id == 4){return "card-container calculator"}

    };

    return (
        <div className={checkClassName()} >
            <div className="card-title-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card-icon">
            <img src={icon} alt="an icon"  />
            </div>
        </div>
    );
}