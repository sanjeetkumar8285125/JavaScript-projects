import React from 'react';
export const Searchbar=(props)=>{
    return(
        <div className="form-group">
            <label>Search</label>
            <input type="text" onChange={props.takeinput} className="form-control" placeholder="Enter text to search"></input>
            <button className="btn btn-success" onClick={props.searchnow}>Search</button>
        </div>
    )
}