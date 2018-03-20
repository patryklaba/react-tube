import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const videoImageUrl = video.snippet.thumbnails.default.url;
    const videoDescription = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="VideoListItem panel">
            <div className="media">
                <img src={videoImageUrl} alt={videoDescription} className="media-object"/>
            </div>
            <div className="heading">
                {videoDescription}
            </div>
        </li>
    ); 
        
}

export default VideoListItem;