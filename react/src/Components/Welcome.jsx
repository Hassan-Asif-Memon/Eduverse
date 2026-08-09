// import React from 'react';
// import {link} from "react-router-dom"
import logo from '../assets/Eduverse-logo.png'
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

    </div>

    <footer id='footer'>
        
    </footer>
    </div>
    </>)
}
export default Welcome;