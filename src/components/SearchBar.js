import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        const term = event.target.value;
        // const fetch = this.props.onVideoSearch;
        this.setState({term});
        // fetch(term);
        this.props.onVideoSearch(term);
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    className="panel"
                    placeholder="Search for something interesting..."
                />
            </div>
        );
    }
}


export default SearchBar;