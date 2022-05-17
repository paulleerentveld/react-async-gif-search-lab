import React, {Component} from "react";

class GifSearch extends Component {
    constructor() {
        super();

        this.state = {
            query: "",
        }
    }

    handleSubmit= (e) => {
        e.preventDefault();
        this.props.fetchGIFS(this.state.query)
    }

    render() {
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={e => {this.setState({query: e.target.value})}} ></input>
                    <br></br>
                    <button type="submit">Search GIF's</button>
                </form>
            </div>
        )
    }
}

export default GifSearch;