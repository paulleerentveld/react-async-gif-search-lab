import React, {Component} from "react";

class GifList extends Component {


    render()    {
        return (
            <div>
                {this.props.gifs.map((gif,index) => {
                    return <li key={index}>
                                    <img src={gif.url} alt="test"></img>
                            </li>
                    })}
            </div>
        )
        
    }
  
}

export default GifList;

