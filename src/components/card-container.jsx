/* eslint-disable react/prop-types */
import "./card-container.css";
import { Video } from "./cards-variation/video";
import { Threadbuilder } from "./cards-variation/Threadbuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { InputAssetArticle } from "./cards-variation/InputAssetArtical";
import { DisplayAssetArtical } from "./cards-variation/DisplayAssetArtical";

const Card = ({ Asset, description, title }) => {
    return (
        <div className="card" id={title}>
            <h4 className="card-heading">
                <span>{title}</span>
                <FontAwesomeIcon
                    style={{
                        position: "absolute",
                        right: "1rem",
                        fontSize: "1.2rem",
                    }}
                    icon={faCircleInfo}
                />
            </h4>
            <div className="card-content">
                <div className="description">
                    <b>Description:</b> <span>{description}</span>
                </div>

                <div className="card-variation">
                    <Asset />
                </div>
            </div>
        </div>
    );
};

export const CardContainer = () => {
    return (
        <section className="card-container">
            <Card
                Asset={Video}
                title={"Technical Project Management"}
                description={
                    "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n"
                }
            />
            <Card
                title={"Threadbuild"}
                Asset={Threadbuilder}
                description={
                    "Watch the video and thread build, and jot out key threads while watching that video."
                }
            />
            <Card
                title={"Structure your pointers"}
                Asset={InputAssetArticle}
                description={
                    "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world."
                }
            />
            <Card
                title={"4SA Method"}
                Asset={DisplayAssetArtical}
                description={"To explore more read more"}
            />
        </section>
    );
};
