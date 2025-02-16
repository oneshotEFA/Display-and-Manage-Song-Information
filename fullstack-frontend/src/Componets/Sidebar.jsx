import "./SidebarStyles.css";
import { Link } from "react-router-dom";
import SongHolder from "./SongHolder.jsx";
import plus from "../assets/plus.png";
import NavB from "./Nav.jsx";

function SideBar({ setId }) {
    return (
        <div className="side-bar">
            {/* Reset ID to null when the album sidebar item is clicked */}
            <Link to={"/SongHolder"} className={'side-box'} onClick={() => setId(null)}>
                <img src={plus} alt="SongHolder" />
            </Link>
            <Link to={"/SongHolder"} className={'side-boxes'} onClick={() => setId(null)}>
                <h5>All Songs</h5>
                <p>Displays All Song</p>
            </Link>
            <Link to="/" className={'side-boxes'} onClick={() => setId(null)}>
                <h5>Artistes</h5>
                <p>Displays all artistes</p>
            </Link>
            <Link to={"/AlbumHolder"} className={'side-boxes'} onClick={() => setId(null)}>
                <h5>Albums</h5>
                <p>Displays all albums</p>
            </Link>
            <Link to="/" className={'side-boxes'} onClick={() => setId(null)}>
                <h5>Genre/Category</h5>
                <p>Hover to See available Genre</p>
            </Link>
            <Link to="/" className={'side-boxes'} onClick={() => setId(null)}>
                <h5>About Me</h5>
            </Link>
        </div>
    )
}

export default SideBar;
