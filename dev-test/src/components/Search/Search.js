import React from "react";
import './Search.css';
// eslint-disable-next-line
// import YouTube from "../../util/YouTube";

class Search extends React.Component {
  state = { title: "" };
  onSearchChanged = (event) => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="Search fl-wrap">
            <input
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Enter Search Keyword"
            />
            <button id="search" onClick={this.search}>SEARCH</button>
          </div>
        </form>
      </>
    );
  }
}

export default Search;
