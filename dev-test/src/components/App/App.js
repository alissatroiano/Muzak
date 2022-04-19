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
      <>
        <nav className="py-2 bg-transparent mb-3 shadow-lg border-bottom">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
              <a
                  href="index.html"
                  className="nav-link link-dark px-2 active mx-auto"
                  aria-current="page"
                >
                <i className="fas fa-music bi mx-2"></i> Earworm</a>
               
              </li>
              <li className="nav-item">
                <a href="www.google.com" className="nav-link link-dark px-2">
                  About
                </a>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a href="#about" className="nav-link link-dark px-2">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link link-dark px-2">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link link-dark px-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link link-dark px-2">
                  <i className="fab fa-snapchat"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link link-dark px-2">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <header className="App-header">
        <div className="container my-0 mx-auto px-3">
          <div className="App p-3">
            <div className="row">
              <div className="col-12">
                <Search onSearch={this.onSearch} />
              </div>
            </div>
            </div>
            </div>
        </header>
        <div className="container">
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
      </>
    );
  }
}
