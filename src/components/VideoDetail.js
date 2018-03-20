import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading....</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="VideoDetail">
            <div className="VideoContainer">
                <iframe title="vid" src={url}></iframe>
            </div>
            <div className="details panel">
                <div>
                    <h3>{video.snippet.title}</h3>
                </div>
                <div>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    );
    
}

export default VideoDetail;