
import React, {Component} from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        }
    }

    fetchGIFS = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=16RKnjQA3rT2MlYTWU40ELZIUSPyU3DG&q=${query}&limit=3&offset=0&rating=g&lang=en`)
          .then(response => response.json())
          .then(result => {
                console.log(result)
                this.setState({gifs: result.data.map(e => {
                  return {url: e.images.original.url}
              
            })})
          })
      }

    render() {
        return (
            <div>
                <GifSearch fetchGIFS={this.fetchGIFS} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;