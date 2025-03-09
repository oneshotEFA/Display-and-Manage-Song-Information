import React from 'react';
import "./ArtisHolder.css";
import i from "../assets/img-1.png";
import {useEffect, useState} from "react";
function ArtisHolder(){
    const [artist,setartist] = useState([]);
    async function fetchartists(){
        var response = await fetch("http://localhost:8080/music/artist");
        if(!response.ok){
            setartist([]);
            return;
    
        }
        response = await response.json();
        setartist(response);
    }
    useEffect(()=>{
        fetchartists()
    } ,[])
    return(
        <>  
            <div className='header'>
                <h1>Artists</h1>
            </div>
            <div className='main'>
            {artist.length === 0 ?(
                <h1>No Artists Found</h1>
            ) :
            artist.map((artist,indexedDB)=>(
                    <div 
                    className='bodyies'
                    key={indexedDB}
                    >
                    <img src={i}></img>
                    <div className='inner'>
                        <div className='inner-header'>
                            <h3>{artist.artistname}</h3>
                        </div>
                        <div className='inner-body'>
                            <p>Album:5 </p>
                            <p>Song:8</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </>
    );
}
export default ArtisHolder;
