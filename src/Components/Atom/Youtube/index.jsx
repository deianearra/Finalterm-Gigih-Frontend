import React from "react";

function Youtube({ videoID, videoTitle }) {
    return (
        <div className="h-[650px]">
            <div className="place-items-center">
            <iframe
                    width="800"
                    height="450"
                    src={`https://www.youtube.com/embed/${videoID}`}
                    title={videoTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
        </div>
    )
};

export default Youtube;