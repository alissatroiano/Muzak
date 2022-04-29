import "./App.css";
import React from "react";
import Search from "../Search/Search";
import youtubeAPI from "../../util/YouTube";
// eslint-disable-next-line
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
  };

  onVideoSelected = (videoId) => {
    this.setState({ selectedVideoId: videoId });
    console.log(videoId);
  };

  onSearch = async (keyword) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: keyword,
      },
    });

    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
  };

  onDisplayVideo = (videoId) => {
    this.setState({ selectedVideoId: videoId });
    console.log(videoId);
  };

  render() {
    return (
      <>
      <header>
      <Navbar />
      </header>
        <Hero />
        <div className="container-fluid my-0 mx-auto">
          <div className="App">
            <div className="row">
              <div className="col-12">
                <Search onSearch={this.onSearch} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid video-section p-3 p-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8">
              <VideoPlayer videoId={this.state.selectedVideoId} />
              <div className="video-player-details">
                <h3 className="video-title">
                  {this.state.videosMetaInfo.map((video) => {
                    if (video.id.videoId === this.state.selectedVideoId) {
                      return (
                        "ID #" + video.id.videoId + " - " + video.snippet.title
                      );
                    } else {
                      return null;
                    }
                  })}
                </h3>
                <h4>{this.selectedVideoId}</h4>
                <p className="video-description">
                  <span className="video-description-text"></span>
                  {this.state.videosMetaInfo.map((video) => {
                    if (video.id.videoId === this.state.selectedVideoId) {
                      return video.snippet.description;
                    } else {
                      return null;
                    }
                  })}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 vid-container">
              <div className="vid-list">
                <VideoList
                  onVideoSelected={this.onVideoSelected}
                  data={this.state.videosMetaInfo}
                />
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <Footer />
      </>
    );
  }
}
