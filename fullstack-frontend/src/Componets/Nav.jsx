import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import img3 from "../assets/img-3.png";
import "./NavStyles.css";
import SongHolder from "./SongHolder";
import { SearchContext } from "./SearchProvider";


function NavB({ nav }) {
    const [toggle, setToggle] = useState(false);
    const [search,setsearch] = useState('');
    // const [value, setvalue] = useState('');
    const {setSearchMusic} = useContext(SearchContext)
    
    const openCloseToggle = () => {
        setToggle((prev) => !prev);
    };
    const handelchange = (e)=>{
        setsearch(e.target.value);
    }
    const searchMusic = ()=>{
        setSearchMusic(search);
    }

    return (
        <>
            <nav className="navbr">
                <div className="hamburger" onClick={openCloseToggle}>
                    ☰
                </div>
                <div className="Delvy">
                    <Link to="/Home">
                        <img src={img3} alt="logo" />
                    </Link>
                </div>
                <div className="links">
                    <input 
                    type="text"
                    placeholder="   Music Name" 
                    value={search}
                    onChange={handelchange}
                    />
                    <button onClick={searchMusic} >Search</button>


                    <div className="link-nav">
                        <Link to="/Home">Home</Link>
                        <a href="#">Features</a>
                        <a href="#">FAQs</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </nav>
         
           
            <div className="side-bar-mobile" style={{ width: toggle ? "200px" : "0px" }}>
                <div className="side-boxes-mobile" onClick={() =>{ nav("/AddMusic");openCloseToggle();}}>
                    <h2>Add Music</h2>
                    <p>Add new Song</p>
                </div>
                <div className="side-boxes-mobile" onClick={() => {nav("/SongHolder");openCloseToggle()}}>
                    <h2>All Songs</h2>
                    <p>Displays All Songs</p>
                </div>
                <div className="side-boxes-mobile" onClick={() => {nav("/ArtisHolder");openCloseToggle()}}>
                    <h2>Artistes</h2>
                    <p>Displays all artistes</p>
                </div>
                <div className="side-boxes-mobile" onClick={() => {nav("/AlbumHolder");openCloseToggle()}}>
                    <h2>Albums</h2>
                    <p>Displays all albums</p>
                </div>
                <div className="side-boxes-mobile" onClick={() =>{ nav("/");openCloseToggle()}}>
                    <h2>Genre/Category</h2>
                    <p>Hover to See available Genre</p>
                </div>
                <div className="side-boxes-mobile" onClick={() => {nav("/");openCloseToggle()}}>
                    <h2>About Me</h2>
                </div>
            </div>
        </>
    );
}

export default NavB;
