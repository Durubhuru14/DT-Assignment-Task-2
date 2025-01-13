/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/Threadbuilder.css";
import lightbulb from "../../assets/lightbulb.svg";
import messageLines from "../../assets/message-lines.svg";
import messageQuestion from "../../assets/message-question.svg";
import accessibility from "../../assets/accessibility.svg";
import upArrow from "../../assets/up_arrow.svg";

const SubThreadAndInterpretation = ({ index }) => {
    return (
        <>
            <div className="sub-thread">
                <h4 className="sub-thread-heading">Sub thread {index}</h4>
                <textarea
                    name="sub-thread"
                    placeholder="Enter text here"
                    className="sub-thread-input"
                ></textarea>
            </div>
            <div className="sub-interpretation">
                <h4 className="sub-interpretation-heading">
                    Sub Interpretation {index}
                </h4>
                <textarea
                    name="sub-interpretation"
                    placeholder="Enter text here"
                    className="sub-interpretation-input"
                ></textarea>
            </div>
        </>
    );
};


export const Threadbuilder = () => {
    const [subThreads, setSubThreads] = useState([1]);
    const [isActive, setisActive] = useState(true)

    const addSubThread = () => {
        setSubThreads((prev) => [...prev, prev.length + 1]);
    };

    const handleClick = () => {
        setisActive(prev => !prev)
    }

    return (
        <>
            <h3
                className="inputAsset-heading"
                onClick={() => {
                    handleClick();
                }}
            >
                <img
                    src={upArrow}
                    alt="up_arrow svg"
                    className={`up_arrow ${isActive ? "" : "rotate"}`}
                />
                <span>Thread A</span>
            </h3>
            <div className={`inputAsset-content ${isActive ? "show" : ""}`}>
                <div className="sub-main-container">
                    <div className="sub-container">
                        {subThreads.map((index) => (
                            <SubThreadAndInterpretation
                                key={index}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="inputAsset-options">
                    <div className="inputAsset-options-icons">
                        <img src={lightbulb} alt="lightbulb icon" />
                        <img src={messageLines} alt="message line icon" />
                        <img
                            src={messageQuestion}
                            alt="message question icon"
                        />
                        <img src={accessibility} alt="accessibility icon" />
                    </div>
                    <div className="inputAsset-options-selectInputs">
                        <select id="category" name="select category">
                            <option value="lorem">Select Category</option>
                            <option value="lorem">Lore</option>
                            <option value="ipsum">Lorem, ipsum</option>
                        </select>
                        <select id="process" name="select process">
                            <option value="lorem">Select Process</option>
                            <option value="lorem">Lore</option>
                            <option value="ipsum">Lorem, ipsum</option>
                        </select>
                    </div>
                </div>

                <div className="inputAsset-footer">
                    <button id="add-subthread-btn" onClick={addSubThread}>
                        + Sub Thread
                    </button>
                    <div className="thread-summary">
                        <h4 className="thread-summary-heading">
                            Summary For Thread A
                        </h4>
                        <textarea
                            placeholder="Enter text here"
                            name="summary"
                            id="thread-summary-input"
                        ></textarea>
                    </div>
                </div>
            </div>
        </>
    );
};