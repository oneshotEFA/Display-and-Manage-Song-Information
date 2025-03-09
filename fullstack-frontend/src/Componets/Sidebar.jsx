import "./SidebarStyles.css";
import { Link } from "react-router-dom";
import SongHolder from "./SongHolder.jsx";
import plus from "../assets/plus.png";
import NavB from "./Nav.jsx";

function SideBar({nav}) {


   
    return (
    
        <>
          
          


            <div className="side-bar">
                {/* Reset ID to null when the album sidebar item is clicked */}
                <div className="side-box" onClick={() => nav("/AddMusic")}>
                    <img src={plus} alt="Add Music" />
                </div>
                <div className={'side-boxes'} onClick={()=>{nav("/SongHolder")}} >
                    <h2>All Songs</h2>
                    <p>Displays All Song</p>
                </div>
                <div className={'side-boxes'} onClick={()=>{nav("/ArtisHolder")}} >
                    <h2>Artistes</h2>
                    <p>Displays all artistes</p>
               </div>
                <div  className={'side-boxes'} onClick={()=>{nav("/AlbumHolder")}} >
                    <h2>Albums</h2>
                    <p>Displays all albums</p>
                </div>
                <div className={'side-boxes'} onClick={()=>{nav("/")}} >
                    <h2>Genre/Category</h2>
                    <p>Hover to See available Genre</p>
                </div>
                <div  onClick={()=>{nav("/")}} className={'side-boxes'} >
                    <h2>About Me</h2>
                </div>
            </div>
        </>
    )
}

export default SideBar;
