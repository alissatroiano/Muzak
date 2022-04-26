import React from "react";

import Video from "../Video/Video";

import "../styles/_video.css";


const VideoList = ({ data, onVideoSelected }) => {
  return (
    <div className="video-list">
    <div className="col-12 ">
      <div style={{ padding: "10px 0" }}>
        <Video data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
    </div>
  );
};

export default VideoList;