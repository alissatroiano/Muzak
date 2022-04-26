import React from "react";
import "../styles/_video.css";

 
const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
  return (
    <div className="video-player mt-5">
    <div className="col-12 mt-5">
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