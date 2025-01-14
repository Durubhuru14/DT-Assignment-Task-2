/* eslint-disable react/prop-types */
export const Video = ({assetContent}) => {
    return (
            <iframe
                src={assetContent}
                frameBorder={0}
                style={{ width: "100%", height: "291px" }}
            ></iframe>
    );
};
