import React from "react";
import './style.css';

class Search extends React.Component{
    state = {
        text: ''
    }
    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
        this.props.onSearch(this.state.text);
    }
    render() {
        return (
            <div>
                <input onChange={this.onChange} className="search" type="text" placeholder="search"/>
                <div className="buttonsPanel">
                    <button className="filterButton">All</button>
                    <button className="filterButton">Active</button>
                    <button className="filterButton">Done</button>
                </div>
            </div>
        );
    }
};

export default Search;