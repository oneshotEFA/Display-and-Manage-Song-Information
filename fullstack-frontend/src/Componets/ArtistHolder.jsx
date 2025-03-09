import React from 'react';
import "./ArtisHolder.css";
import i from "../assets/img-1.png";
import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import SongHolder from './SongHolder';
function ArtisHolder(){
    const [artist,setartist] = useState([]);
    const [artistName,setartistName] = useState(null);
    const location = useLocation(); 
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

    const findbyartistname =(artistname) => {
        setartistName(artistname);
    }
    
    useEffect(() => {
        if (location.pathname === "/ArtisHolder") {
            setartistName(null);
        }
    }, [location.pathname]);

    return(
        <>  
            {!artistName && (
                <div className='header'>
                <h1>Artists</h1>
            </div>
            )}
            { !artistName &&(
                <>
                <div className='main'>
                        {artist.length === 0 ? (
                            <h1>No Artists Found</h1>
                        ) :
                            artist.map((artist, indexedDB) => (
                                <div
                                    className='bodyies'
                                    key={indexedDB}
                                    onClick={() => {
                                        findbyartistname(artist.artistname);
                                    } }
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
            )}
            
            {artistName && <SongHolder artistName={artistName}/>}
        </>
    );
}
export default ArtisHolder;
