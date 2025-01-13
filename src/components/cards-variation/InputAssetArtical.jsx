import Editor from "../Editor/Editor";
import "./styles/inputAssetArtical.css";

export const InputAssetArticle = () => {
    return (
        <section
            className="inputAsset-container"
            style={{ borderTop: "1px solid gray" }}
        >
            <div className="inputAsset-subContainer">
                <div className="heading-input">
                    <h4>Heading</h4>
                    <input type="text" />
                </div>
                <div className="content-input">
                    <h4>Content</h4>
                    <Editor />
                </div>
            </div>
        </section>
    );
};
