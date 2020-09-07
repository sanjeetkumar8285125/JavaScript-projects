import React from 'react';
import { Songs } from './Songs';
export const Searchlist=(props)=>{
    let totalrecords=props.audiodata.length;
    console.log("props rec in list ",props.audiodata);
    const success=(
        <>
        <p>Total Number of records {totalrecords}</p>
        {/* {props.audiodata.map(ele=><audio controls>
                <source src={ele.previewUrl}/>
        </audio>)} */}
    {props.audiodata.map(ele=><Songs key={ele.trackId} url={ele.previewUrl} picurl={ele.artworkUrl60}/>)} 
        </>
    );
    const norecord=<p>No record found</p>;
    return(
        <div>
         {props.audiodata.length==0?norecord:success} 
        </div>
    )
}