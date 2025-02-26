import imge from "../assets/checking.jpg";
import "./AlbumHolderStyles.css";
import {useEffect, useState} from "react";
import SongHolder from "./SongHolder.jsx";
function AlbumHolder () {
    const baseURL = "http://localhost:8080/music/";
    const [albumHolder, setAlbumHolder] = useState([]);
    const [id, setId] = useState(null);
    async function fetchAlbum(){
        var response = await fetch(baseURL+"album");
        if(!response.ok){
           setAlbumHolder(null);
        }
        response = await response.json();
        setAlbumHolder(response);
    }
    useEffect(() => {
        fetchAlbum();
    },[])

    useEffect(() => {
        if (id) {
            setAlbumHolder([]);
        }
    }, [id]);
    return(
        <>
            <div className="header">
                {id? "":(
                    <h1>All Albums</h1>
                )}
            </div>
            <div className="container">

                {!albumHolder?(
                    <h1>No album Found</h1>
                )  :
                albumHolder.map((album,index)=>(
                    <div
                        className={"component"}
                        key={index}
                        onClick={ () =>
                            setId(album.albumTitle)

                        }>
                        <img src={imge} alt={"image"}/>
                        <h4>{album.albumTitle}</h4>
                        <p>{album.artistName}</p>
                    </div>
                ))}
            </div>

            {id && <SongHolder albumTitle={id} />  }
            {}
        </>
    )
}
export default AlbumHolder