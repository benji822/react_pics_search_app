import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="userInput">Image Search</label>
                        <input
                            id="userInput"
                            value={this.state.term}
                            type="text"
                            onChange={e =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
