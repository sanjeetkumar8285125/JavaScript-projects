import React from 'react';
export const Songs=(props)=>{
    return(
        <>
 <img src={props.picurl} alt=""/> <audio controls loop>
            <source src={props.url} type="audio/mp4" />
        </audio>
        </>
    )
}