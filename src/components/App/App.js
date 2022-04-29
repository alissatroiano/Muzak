import "./App.css";
import React from "react";
import Search from "../Search/Search";
import youtubeAPI from "../../util/YouTube";
// eslint-disable-next-line
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

console.log(process.env.REACT_APP_API_KEY)

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
  };

  render() {
    return (
      <>
        <nav className="py-2 bg-transparent mb-3 shadow-lg border-bottom">
          <div className="container-fluid d-flex flex-wrap my-3">
            <ul className="nav me-auto">
              <li className="nav-item">
                <a
                  href="index.html"
                  className="nav-link navbar-brand link-dark px-2 active mx-auto"
                  aria-current="page"
                  id="home"
                >
                  <i className="fas fa-headphones-simple bi mx-2"></i>
                  Warble
                </a>
              </li>
            </ul>
            <ul className="nav ms-auto">
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
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <header className="App-header">
          <div className="container-fluid my-0 mx-auto px-3">
            <div className="App">
              <div className="row">
                <div className="col-12">
                  <Search onSearch={this.onSearch} />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container-fluid video-section">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8">
              <VideoPlayer videoId={this.state.selectedVideoId} />
              <div className="video-player-details">
                <h3 className="video-title">
                  {this.state.videosMetaInfo.map((video) => {
                    if (video.id.videoId === this.state.selectedVideoId) {
                      return video.snippet.title;
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
          <div className="row">
          </div>
        </div>
        <div className="container-fluid d-block d-lg-block">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div
              className="col-md-4 d-flex align-items-center"
              id="footer-text">              
              <i className="fas fa-headphones-simple mx-2"></i>
              <span>Warble</span>
              <span className="text-muted ms-1"> © 2022 </span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-2 me-md-4">
              <li className="ms-3">
                <a
                  className="text-muted"
                  rel="noopener noreferrer"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  rel="noopener noreferrer"
                  href="https://facebook.com/"
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  rel="noopener noreferrer"
                  href="https://instagram.com/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </>
    ); 
  }
}
