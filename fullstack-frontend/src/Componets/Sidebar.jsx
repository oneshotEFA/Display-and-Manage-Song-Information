import "./SidebarStyles.css";
import { Link } from "react-router-dom";
import SongHolder from "./SongHolder.jsx";
import plus from "../assets/plus.png";
import NavB from "./Nav.jsx";

function SideBar({id, setId ,nav,}) {


    function handleClick(id) {
        if(id!==null){
            setId(null);
        }
    }
    return (
    
        <>  
            {/* <div className="hamburger" onClick="toggleSidebar()">☰</div>
            <div className="side-bar-mobile">
                
                <div  className={'side-box-mobile'} onClick={()=>{handleClick;nav("/AddMusic");}}>
                     <img src={plus} alt="SongHolder" />
                </div>
                <Link to={"/SongHolder"} className={'side-box-mobile'} >
                    <h5>All Songs</h5>
                    <p>Displays All Song</p>
                </Link>
                <Link to="/" className={'side-box-mobile'} >
                    <h5>Artistes</h5>
                    <p>Displays all artistes</p>
                </Link>
                <Link to={"/AlbumHolder"} className={'side-box-mobile'} onClick={handleClick} >
                    <h5>Albums</h5>
                    <p>Displays all albums</p>
                </Link>
                <Link to="/" className={'side-box-mobile'} >
                    <h5>Genre/Category</h5>
                    <p>Hover to See available Genre</p>
                </Link>
                <Link to="/" className={'side-box-mobile'} >
                    <h5>About Me</h5>
                </Link>
            </div> */}


            <div className="side-bar">
                {/* Reset ID to null when the album sidebar item is clicked */}
                <div className="side-box" onClick={() => nav("/AddMusic")}>
                    <img src={plus} alt="Add Music" />
                </div>
                <div className={'side-boxes'} onClick={()=>{nav("/SongHolder");handleClick()}} >
                    <h2>All Songs</h2>
                    <p>Displays All Song</p>
                </div>
                <div className={'side-boxes'} onClick={()=>{nav("/");handleClick()}} >
                    <h2>Artistes</h2>
                    <p>Displays all artistes</p>
               </div>
                <div  className={'side-boxes'} onClick={()=>{handleClick();nav("/AlbumHolder")}} >
                    <h2>Albums</h2>
                    <p>Displays all albums</p>
                </div>
                <div className={'side-boxes'} onClick={()=>{nav("/");handleClick()}} >
                    <h2>Genre/Category</h2>
                    <p>Hover to See available Genre</p>
                </div>
                <div  onClick={()=>{nav("/");handleClick()}} className={'side-boxes'} >
                    <h2>About Me</h2>
                </div>
            </div>
        </>
    )
}

export default SideBar;
