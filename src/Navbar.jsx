import React from 'react';
import "./navbar.scss"
import img1 from "./assets/img/copier1.jpg"
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <span>Lama dev</span>
                <div className="social">
                    <a href="#"><FaLinkedin />  </a>
                    <a href="#"> <FaInstagram /></a>
                    <a href="#"><SiTelegram /></a>
                    <a href="#"><img src="dribble.png" alt="" /></a>

                </div>

            </div>

        </div>
    );
};

export default Navbar;