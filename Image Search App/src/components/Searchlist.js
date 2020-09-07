import React from 'react';
import {Picture} from './Picture';
export const Searchlist=(props)=>
{
    let totalrecord=props.imagedata.length;
    console.log("props rec in list ",props.imagedata)
    const norecordfound=<p>No record found</p>;
    const successjsx=(
        <>
        <p>List of records {totalrecord} </p>
        {/* {props.imagedata.map(ele=><img src={ele.images.original.url}/>)} */}
        {props.imagedata.map(ele=><Picture key={ele.id} url={ele.images.original.url}/>)}
        </>
    );
    return(
        <div>
    {props.imagedata.length==0?norecordfound:successjsx}
    </div>
    )
}