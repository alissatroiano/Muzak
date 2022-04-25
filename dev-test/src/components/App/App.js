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

  onDisplayVideo = (videoId) => {
    this.setState({ selectedVideoId: videoId });
  };

  render() {
    return (
      <>
        <nav className="py-2 bg-transparent mb-3 shadow-lg border-bottom">
          <div className="container d-flex flex-wrap my-3">
            <ul className="nav me-auto">
              <li className="nav-item">
                <a
                  href="index.html"
                  className="nav-link navbar-brand link-dark px-2 active mx-auto"
                  aria-current="page"
                  id="home"
                >
                  <i className="fas fa-worm bi mx-2"></i> Earworm
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
        <div className="container video-section">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8">
              <VideoPlayer videoId={this.state.selectedVideoId} />
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
        </div>
        <div className="container d-block d-lg-block">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center" id="footer-text">
              <span className="footer-lead ms-3 ms-md-5">© 2022 </span>
              <i className="fas fa-worm mx-2"></i>
              <span>Earworm</span>
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
