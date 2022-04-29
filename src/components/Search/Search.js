import React from "react";
import "./Search.css";
// eslint-disable-next-line
// import YouTube from "../../util/YouTube";

export default class  Search extends React.Component {
  searchData;
  constructor(props) {
    super(props);
    this.onSearchChanged = this.onSearchChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      value: '',
    };
  }

  onSearchChanged = (event) => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
    this.onSubmit.bind(this);
    this.setState = {
      title: '',
    };
  }

  componentDidMount() {
    this.searchData = JSON.parse(localStorage.getItem("search"));
    if (localStorage.getItem("search")) {
      this.setState({
        videosMetaInfo: this.searchData,
      });
    }
  }

  componentDidUpdate(nextState) {
    localStorage.setItem('search', JSON.stringify(nextState));
}

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search">
                <form className="d-flex search-form" onSubmit={this.onSubmit}>
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Search YouTube videos here..."
                    aria-label="Search"
                    id="video-search"
                    value={this.state.title}
                    onChange={this.onSearchChanged}
                  />
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    id="search"
                    onClick={this.search}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
