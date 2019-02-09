import React from "react";

const Search = () => {
    return (
        <div>
            <input className="search" type="text" placeholder="search"/>
            <div className="buttonsPanel">
                <button className="filterButton" active>All</button>
                <button className="filterButton" active>Active</button>
                <button className="filterButton" active>Done</button>
            </div>
        </div>
    );

};

export default Search;