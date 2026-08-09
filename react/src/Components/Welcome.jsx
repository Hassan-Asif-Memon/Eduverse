// import React from 'react';
// import {link} from "react-router-dom"
import logo from '../assets/Eduverse-logo.png'
import hero from "../assets/pic1.png"
function Welcome(){
    return(<>
    <div className="nav">
        <img id='logo' src={logo} alt="" />
        <div className="buttons">
            <button id="login">Login</button>
            <button id="signup">Sign up</button>
        </div>
    </div>
    <div className="box">
    <div className="left">
        <h1 id='connect'>Connect.</h1>
        <h1 id='learn'>Learn.</h1>
        <h1 id='grow'>Grow.</h1>
        <p className="description">Eduverse is an educational <br />
        social network for students, <br />
        teachers and institutes to <br />
        connect, share and learn together.</p>

        <button id='start'>Get Started</button>
        <button id='explore'>Explore</button>
        

    </div>
    <div className="right">
        <img id='hero' src={hero} alt="" />
    </div>

    </div>

    <footer id='footer'>
        <div className="foot">
            <h2>10K+</h2>
            <p>Students</p>
        </div>
        <div className="foot">
            <h2>1K+</h2>
            <p>Teachers</p>
        </div>
        <div className="foot">
            <h2>500+</h2>
            <p>Institutes</p>
        </div>
        <div className="foot">
            <h2>10K+</h2>
            <p>Posts</p>
        </div>
    </footer>
    </>)
}
export default Welcome;