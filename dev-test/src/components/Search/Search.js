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

       <form className="search-form" onSubmit={this.onSubmit}>
        <input 
          className="form-control me-2" 
          type="text"
           placeholder="Search" 
          aria-label="Search"
          id="video-search"
          value={this.state.title}
          onChange={this.onSearchChanged} 
          />
        
          <button className="btn btn-outline-success" type="submit" id="video-search" onClick={this.search}>Search</button>
      </form> 

      </>
    );
  }
}

export default Search;
