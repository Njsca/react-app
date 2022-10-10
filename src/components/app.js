import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from "./giflist";


class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif" >
            <Gif id="bW7WgIA6WBxXVYAXub"/>
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
};

export default App;
