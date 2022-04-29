import React from "react";
import "../styles/_video.css";
 
const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <div className="d-none"></div>
    );
  }
  return (
    <div className="video-player my-3 my-md-5">
    <div>
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
    </div>
  );
};

export default VideoPlayer;