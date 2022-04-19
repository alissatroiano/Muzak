import "./App.css";
import React from "react";
// eslint-disable-next-line
import Search from "../Search/Search";
import youtubeAPI from "../../util/YouTube";
// eslint-disable-next-line
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
  };

  onVideoSelected = (videoId) => {
    this.setState({ selectedVideoId: videoId });
  };

  onSearch = async (keyword) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: keyword,
      },
    });
    // console.log(response)

    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="container-fluid my-0 mx-auto px-3">
        <div className="App p-3">
          <div className="row">
            <div className="col-12">
              <Search onSearch={this.onSearch} />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8">
              <VideoPlayer videoId={this.state.selectedVideoId} />
            </div>
            <div className="col-12 col-md-4">
              <VideoList
                onVideoSelected={this.onVideoSelected}
                data={this.state.videosMetaInfo}
              />
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}
