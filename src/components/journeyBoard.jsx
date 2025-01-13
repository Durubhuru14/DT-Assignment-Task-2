import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./journeyBoard.css";

export const JourneyBoard = () => {
    const [isOpen, setisOpen] = useState(false)

    const handleClick = () => {
        setisOpen(prev => !prev)
    }

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
                    <li className="project-name-text">
                        Explore the world of management
                    </li>
                </ul>
                <ul className="tasks-list">
                    <li className="task">
                        <a href="#Technical Project Management">
                            Technical Project Management
                        </a>
                    </li>
                    <li className="task">
                        <a href="#Threadbuild">Threadbuild</a>
                    </li>
                    <li className="task">
                        <a href="#Structure your pointers">
                            Structure your pointers
                        </a>
                    </li>
                    <li className="task">
                        <a href="#4SA Method">4SA Method</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};
