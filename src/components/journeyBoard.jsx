/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./styles/journeyBoard.css";

export const JourneyBoard = ({ projectTitle, assetsArr }) => {
    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => {
        setisOpen((prev) => !prev);
    };

    return (
        <section className={`journey-board ${isOpen ? "open" : ""}`}>
            <h2
                className="journey-board-heading"
                onClick={() => {
                    handleClick();
                }}
            >
                <span className="heading-text">Journey Board</span>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`right-arrow ${isOpen ? "rotate" : ""}`}
                />
            </h2>
            <div className="journey-board-content">
                <ul className="project-name">
                    <li className="project-name-text">{projectTitle}</li>
                </ul>
                <ul className="tasks-list">
                    {assetsArr.map((asset) => {
                        return (
                            <li
                                className="task"
                                key={asset.asset_id}
                            >
                                <a href={`#${asset.asset_title}`}>
                                    {asset.asset_title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
