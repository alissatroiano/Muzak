import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
// eslint-disable-next-line 
import Search from '../Search/Search';
// import SearchResults from '../SearchResults/SearchResults';
// import YTSearch from 'youtube-api-search';
import youtubeAPI from '../../util/YouTube';  

export default class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
  };

  onSearch = async (keyword) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: keyword,
      },
    })
    console.log(response)
  };

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <SearchBar />
      </div>
    );
  }
}
