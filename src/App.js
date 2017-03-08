import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Search from './components/Search';
import Video from './components/Video';
import List from './components/List';

const API_KEY = 'AIzaSyD2KQQkDvd94QXSQ77AZ0opRhiGrMzUIg0';
const DEFAULT_QUERY = 'JavaScript';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: DEFAULT_QUERY,
      videos: [],
      selectedVideo: null
    };

    this.search();
    this.search = this.search.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  search() {
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search?';
    const FETCH_URL = `${BASE_URL}key=${API_KEY}&part=snippet&q=${this.state.searchTerm}`;

    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const videos = json.items;
      this.setState({ videos, selectedVideo: videos[0] });

    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchTerm });
    this.search();
    event.preventDefault();
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo })
  }

  render() {

    const { searchTerm, videos, selectedVideo } = this.state;
    return (
      <div className="App">
        <div className="left">
            <List
            onVideoSelect={this.onVideoSelect}
            videos={videos} />
        </div>
        <div className="right">
          <Title />
          <Search
            placeholder="Search YouTube"
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >Search</Search>
          <Video video={selectedVideo}/>
        </div>
      </div>
    );
  }
}

export default App;
