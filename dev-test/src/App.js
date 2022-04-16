import './App.css';
import { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
// import SearchResults from '../SearchResults/SearchResults';

import YTSearch from 'youtube-api-search';

let API_KEY = "AIzaSyCjxxjhf7PIhH47-l-v3vMzbtq0ZfF6T-c"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searchText: ''
    };

    this.search = this.search.bind(this);
  }

  search(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        searchResults: videos
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="SearchBar">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
