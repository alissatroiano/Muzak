import React from "react";
import Video from "../Video/Video";
import "../styles/_video.css";

const VideoList = ({ data, onVideoSelected }) => {
  if (!VideoList) {
    return (
      <div className="d-none"></div>
    );
  }

  return (
    <div className="video-list">
    <div className="col-12 ">
      <div style={{ padding: "0 0" }}>
        <Video data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
    </div>
  );
};

export default VideoList;
