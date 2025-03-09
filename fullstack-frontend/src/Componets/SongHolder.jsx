import "./SongHolderStyles.css";
import { useEffect, useState,useContext } from "react";
import { SearchContext } from "./SearchProvider";

// eslint-disable-next-line react/prop-types
function SongHolder({ albumTitle,artistName }) {
    const {searchMusic} = useContext(SearchContext);
    var Url = `http://localhost:8080/music/`;
    const [songHolder, setSongHolder] = useState([]);
    var nosong = null;
    async function FetchSong() {
        try {
            if (albumTitle) {
                Url = `http://localhost:8080/music/find?albumName=${encodeURIComponent(albumTitle)}`;
            }
            else if(artistName){
                Url = `http://localhost:8080/music/findbyartist?artisname=${encodeURIComponent(artistName)}`;
            } 
            else if(searchMusic){
                Url =`http://localhost:8080/music/Search?MusicTitle=${encodeURIComponent(searchMusic)}`;
            }
            else {
                Url = `http://localhost:8080/music/Song`;
            }

            const response = await fetch(Url);
            if (!response.ok) {
                setSongHolder(nosong);
                
            }
            let song = await response.json();
            setSongHolder(song);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        FetchSong();
    }, [albumTitle, artistName,searchMusic]);
    

    return (
        <>
            <div className="header">
                <h1>{albumTitle? albumTitle:"All Musics"}</h1>
            </div>
            <div className="Container">
                {songHolder.length===0?(
                    <h1 >No Song Found</h1>
                ):
                songHolder.map((song, index) => (
                    <div className="row" key={index}>
                        <div className="infos">
                            <p>{song.musicTitle}</p>
                            <p>{song.artistName}</p>
                            <p>{song.albumName}</p>
                        </div>
                        <div className="Duration">
                            <p>5:34</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SongHolder;
