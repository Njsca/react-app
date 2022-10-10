import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from "./giflist";
import giphy from "giphy-api";

const GIPHY_API_KEY = 'KrtqBV6Bn4CZMjEDiCcEwKSlqzitJhOt'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "bW7WgIA6WBxXVYAXub"
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    giphy('KrtqBV6Bn4CZMjEDiCcEwKSlqzitJhOt').search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      })
    });
  }


  // search(query) {
  //   const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
  //   fetch(giphEndpoint).then(response => response.json()).then((data) => {
  //     const gifs = data.data.map(giph => giph.id)
  //     this.setState({
  //       gifs: gifs
  //     })
  //   })
  // }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif" >
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>

    )
  }
};

export default App;
