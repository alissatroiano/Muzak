import React from "react";

import Video from "../Video/Video";

import "../styles/_video.css";


const VideoList = ({ data, onVideoSelected }) => {
  return (
    <div className="video-list">
    <div className="col-12 ">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        <Video data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
    </div>
  );
};

export default VideoList;