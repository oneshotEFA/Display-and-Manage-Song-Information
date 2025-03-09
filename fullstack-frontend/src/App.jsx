import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Nav from "./Componets/Nav.jsx";
import './App.css';
import SideBar from "./Componets/Sidebar.jsx";
import AlbumHolder from "./Componets/AlbumHolder.jsx";
import SongHolder from "./Componets/SongHolder.jsx";
import AddMusic from "./Componets/AddMusic.jsx";
import ArtisHolder from "./Componets/ArtistHolder.jsx";
import Home from "./Componets/Home.jsx";
import { useLocation } from "react-router-dom";
function App() {
    
    return (
        
        <Router>
            <MainApp />
        </Router>
    );
}


function home(){

    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Router>
        
    )
}
function MainApp() {
    const navigate = useNavigate();
    const [home,sethome] =useState(false);
    const location = useLocation();
   useEffect(() => {
           if (location.pathname === "/Home") {
               sethome(true);
           }
           else{
            sethome(false);
           }
       }, [location.pathname]);

    const navCtrl = (path) => {
        navigate(path);
    };
    const handle = ()=>{
        sethome(false);
        location.pathname="/SongHolder";
    }

    return (
        <>  {home?(
            <Home handle={handle}/>
        ):(
            <div className="App">
                <Nav nav={navCtrl} />
                <SideBar nav={navCtrl} /> 
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<SongHolder />} />
                        <Route path="/SongHolder" element={<SongHolder />} />
                        <Route path="/AlbumHolder" element={<AlbumHolder key={Date.now()} />} />
                        <Route path="/AddMusic" element={<AddMusic />} />
                        <Route path="/ArtisHolder" element={<ArtisHolder />} />
                    </Routes>
                </div>
            </div>
        )} 
            
        </>
        
    );
}

export default App;
