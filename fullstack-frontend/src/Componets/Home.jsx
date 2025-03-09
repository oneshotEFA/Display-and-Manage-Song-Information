import React from "react";
import "./HomeStyle.css";
import img1 from "../assets/headphone.jpg";
import img2 from "../assets/cat.png";
import img3 from "../assets/img-3.png";

function HomePage({ handle }) {
    return (
        <div className="containerr">
            <div className="left">
                <div className="logo">
                <img src={img3} alt="Music Theme" />
                </div>
                <div className="info">
                    <h1 className="one">Discover & Enjoy Music</h1>
                    <p>Explore a world of music information at your fingertips.</p>
                    <button onClick={handle} className="explore-btn">Explore Now</button>
                </div>
            </div>

            <div className="right">
                <img src={img1} alt="Music Theme" className="banner-img" />
            </div>
        </div>
    );
}

export default HomePage;
