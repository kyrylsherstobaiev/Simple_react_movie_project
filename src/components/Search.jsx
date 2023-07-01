import {Component} from "react";
import {PRELOADING_MOVIE_SEARCH} from "../layout/Main";

class Search extends Component {
    state = {
        search: "",
        type: "all",
    };

    componentDidMount() {
        this.setState({search: PRELOADING_MOVIE_SEARCH})
    }

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (e) => {
        this.setState(
            () => ({
                type: e.target.dataset.type,
            }),
            () => this.props.searchMovies(this.state.search, this.state.type)
        );
    };

    render() {
        return (
            <div className="input-field">
                <input
                    placeholder="search"
                    id="search"
                    type="search"
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button
                    className="btn search-btn"
                    onClick={() =>
                        this.props.searchMovies(this.state.search, this.state.type)
                    }
                >
                    Search
                </button>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
                        />
                        <span>Movies Only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span>Serials Only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export {Search};
