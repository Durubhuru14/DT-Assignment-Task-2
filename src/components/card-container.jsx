/* eslint-disable react/prop-types */
import "./styles/card-container.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { checkContentAndAssetType } from "../helper/checkContentAndAssetType";

// Card component
const Card = ({ Asset, description, title, assetContent }) => {
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
                    <Asset assetContent={assetContent} />
                </div>
            </div>
        </div>
    );
};

// CardContainer component
export const CardContainer = ({ assetsArr }) => {
    return (
        <section className="card-container">
            {assetsArr.map((asset) => {
                const AssetComponent = checkContentAndAssetType(
                    asset.asset_type,
                    asset.asset_content_type
                );

                return (
                    <Card
                        key={asset.asset_id}
                        title={asset.asset_title}
                        description={asset.asset_description}
                        Asset={AssetComponent}
                        assetContent={asset.asset_content}
                    />
                );
            })}
        </section>
    );
};
