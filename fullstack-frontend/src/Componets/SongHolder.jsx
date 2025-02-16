import "./SongHolderStyles.css";
import { useEffect, useState } from "react";

function SongHolder({ albumTitle }) {
    var Url = `http://localhost:8080/music/`;
    const [songHolder, setSongHolder] = useState([]);

    async function FetchSong() {
        try {
            if (albumTitle) {
                Url = `http://localhost:8080/music/find?albumName=${encodeURIComponent(albumTitle)}`;
            } else {
                Url = `http://localhost:8080/music/Song`;
            }

            const response = await fetch(Url);
            if (!response.ok) {
                throw new Error("Error fetching Song");
            }
            let song = await response.json();
            setSongHolder(song);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        FetchSong();
    }, [albumTitle]);

    return (
        <>
            <div className="Container">
                <div className="header">
                    <h1>{albumTitle? albumTitle:"All Musics"}</h1>
                </div>
                {songHolder.map((song, index) => (
                    <div className="row" key={index}>
                        <div className="info">
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
