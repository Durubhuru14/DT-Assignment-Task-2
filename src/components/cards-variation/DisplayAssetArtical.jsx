import "./styles/displayAssetArtical.css";
import upArrow from "../../assets/up_arrow.svg";
import { useState } from "react";

const IntroContainer = () => {
    const [IsActive, setIsActive] = useState(true);
    const handleClick = () => {
        setIsActive((prev) => !prev);
    };
    return (
        <div className="intro-container">
            <h3
                className="intro-heading"
                onClick={() => {
                    handleClick();
                }}
            >
                <img
                    className={`up_arrow ${IsActive ? "" : "rotate"}`}
                    src={upArrow}
                />
                <span className="intro-text">Introduction</span>
            </h3>
            <div className={`intro-content ${IsActive ? "show" : ""}`}>
                <p className="intro-main-content">
                    The 4SA Method, How to bring a idea into progress?
                </p>
                <p className="intro-sub-content">See More</p>
            </div>
        </div>
    );
};

const ThreadContainer = () => {
    const [IsActive, setIsActive] = useState(true);
    const handleClick = () => {
        setIsActive((prev) => !prev);
    };
    return (
        <div className="thread-container">
            <h3
                className="thread-heading"
                onClick={() => {
                    handleClick();
                }}
            >
                <img
                    className={`up_arrow ${IsActive ? "" : "rotate"}`}
                    src={upArrow}
                />
                <span className="thread-text">Thread A</span>
            </h3>
            <div className={`thread-content ${IsActive ? "show" : ""}`}>
                <div className="thread-sub-container">
                    <p className="thread-main-content">
                        How are you going to develop your stratergy ? Which
                        method are you going to use to develop a stratergy ?
                        What if the project is lengthy?
                    </p>
                    <p className="thread-sub-content">See More</p>
                </div>
                <div className="example">
                    <h3 className="example-heading">Example 1</h3>
                    <p className="example-content">
                        You have a concept , How will you put into progress?
                    </p>
                </div>
            </div>
        </div>
    );
};

export const DisplayAssetArtical = () => {
    return (
        <section style={{ borderTop: "1px solid gray" }}>
            <IntroContainer />
            <ThreadContainer />
        </section>
    );
};
