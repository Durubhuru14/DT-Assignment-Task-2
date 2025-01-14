import { DisplayAssetArtical } from "../components/cards-variation/DisplayAssetArtical"
import { InputAssetArticle } from "../components/cards-variation/InputAssetArtical"
import { Threadbuilder } from "../components/cards-variation/Threadbuilder"
import { Video } from "../components/cards-variation/video"

export const checkContentAndAssetType = (assetType, assetContentType) => {
    if (assetType === "display_asset") {
        if (assetContentType === "video") {
            return Video;
        }
        if (assetContentType === "article") {
            return DisplayAssetArtical;
        }
    }

    if (assetType === "input_asset") {
        if (assetContentType === "threadbuilder") {
            return Threadbuilder;
        }
        if (assetContentType === "article") {
            return InputAssetArticle;
        }
    }

    // Fallback to a default component or null
    return <div>Unsupported Asset</div>;
};
