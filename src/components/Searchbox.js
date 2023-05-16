import React from "react";

const Searchbox = ({ onSearchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b-green bg-lightest-blue"
                type="searc"
                placeholder="Search robots"
                onChange={onSearchChange}
            />
        </div>
    )
}

export default Searchbox