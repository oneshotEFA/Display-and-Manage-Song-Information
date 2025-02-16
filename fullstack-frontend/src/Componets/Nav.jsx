import React from "react";
import logo from "../assets/logo-light.png";
import "./NavStyles.css";
import img3 from "../assets/img-3.png";


function NavB(){
    return(
        <>
                <nav className="navbr">
                    <div className="Delvy">
                        <a href="#">
                            <img src={img3} alt={"logo"} />
                        </a>
                    </div>
                    <div className={'links'}>
                        <input placeholder={"      artist name"}/>
                        <button >Search</button>
                        <a href="#">Home</a>
                        <a href="#">Features</a>
                        <a href="#">FAQs</a>
                        <a href="#">Contact</a>
                    </div>

                </nav>
            </>
    )
}

export default NavB;
