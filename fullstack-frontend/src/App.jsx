import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Nav from "./Componets/Nav.jsx";
import './App.css';
import SideBar from "./Componets/Sidebar.jsx";
import AlbumHolder from "./Componets/AlbumHolder.jsx";
import SongHolder from "./Componets/SongHolder.jsx";
import AddMusic from "./Componets/AddMusic.jsx";

function App() {
    return (
        <Router>
            <MainApp />
        </Router>
    );
}

function MainApp() {
    const navigate = useNavigate();
    const [id, setId] = useState(null); 

    const navCtrl = (path) => {
        navigate(path);
    };

    return (
        <div className="App">
            <Nav />
            <SideBar nav={navCtrl} id={id} setId={setId} /> 
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<SongHolder />} />
                    <Route path="/SongHolder" element={<SongHolder />} />
                    <Route path="/AlbumHolder" element={<AlbumHolder />} />
                    <Route path="/AddMusic" element={<AddMusic />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
