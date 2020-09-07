import React from 'react';

//for multi Line statement use {} and return
export const Searchbar=(props)=>{
    return (<div className="form-group">
        <label>Search</label>
<input type="text"  className="form-control" onChange={props.takeInput} placeholder="Enter text to search" />
<button className="btn btn-danger" onClick={props.btclick}>Search</button>
    </div>)
}
