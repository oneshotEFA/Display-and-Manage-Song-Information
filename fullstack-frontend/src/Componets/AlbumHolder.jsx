import imge from "../assets/checking.jpg";
import "./AlbumHolderStyles.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SongHolder from "./SongHolder.jsx";

function AlbumHolder() {
    const baseURL = "http://localhost:8080/music/";
    const [albumHolder, setAlbumHolder] = useState([]);
    const [id, setId] = useState(null);
    const location = useLocation(); 

    async function fetchAlbum() {
        var response = await fetch(baseURL + "album");
        if (!response.ok) {
            setAlbumHolder(null);
        }
        response = await response.json();
        setAlbumHolder(response);
    }

    useEffect(() => {
        fetchAlbum();
    }, []);

  
    useEffect(() => {
        if (location.pathname === "/AlbumHolder") {
            setId(null);
        }
    }, [location.pathname]);

    return (
        <>
            <div className="header">
                {!id && <h1>All Albums</h1>}
            </div>

            {/* Use state-based conditional rendering */}
            {!id && (
                <div className="container">
                    {albumHolder.length===0 ? (
                        <h1>No album Found</h1>
                    ) : (
                        albumHolder.map((album, index) => (
                            <div
                                className="component"
                                key={index}
                                onClick={() => setId(album.albumTitle)}
                            >
                                <img src={imge} alt="Album" />
                                <h4>{album.albumTitle}</h4>
                                <p>{album.artistName}</p>
                            </div>
                        ))
                    )}
                </div>
            )}

            {id && <SongHolder albumTitle={id} />}
        </>
    );
}

export default AlbumHolder;
