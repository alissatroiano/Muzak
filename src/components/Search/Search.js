import React from "react";
import "./Search.css";

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

export default Search;
