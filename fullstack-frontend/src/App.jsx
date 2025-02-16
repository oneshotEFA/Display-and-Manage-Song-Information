import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import image1 from './assets/home-img.png';
import Nav from "./Componets/Nav.jsx";
import './App.css';
import Main from "./Componets/Main.jsx";
import SideBar from "./Componets/Sidebar.jsx";
import AlbumHolder from "./Componets/AlbumHolder.jsx";
import SongHolder from "./Componets/SongHolder.jsx";
function App(){

    return (
        <>
            <Router>
                <div className="App">
                    <Nav/>
                    <SideBar />
                    <div className="main-content">
                            <Routes>
                                <Route path={""} element={<SongHolder/>}/>
                                <Route path="/SongHolder" element={<SongHolder />} />
                                <Route path="/AlbumHolder" element={<AlbumHolder />} />
                            </Routes>
                    </div>
                </div>
            </Router>


        </>
    )
}




export default App;
