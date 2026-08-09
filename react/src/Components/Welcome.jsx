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
    </>)
}
export default Welcome;