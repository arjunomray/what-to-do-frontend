import { Link } from "react-router-dom"
import Logout from "../Users/Logout.jsx"

const Navbar = ({ loginState, setLoginState }) => {
    return (
        <nav>
            <h1 className="text-5xl p-3 font-bold">what to do...</h1>
            {!loginState ? (
                <div className="with-user flex justify-around text-xl text-white bg-black py-3">
                    <Link to="user/login" >Sign In</Link>
                    <Link to="user/register">Register</Link>
                </div>
            ) : (
                <div className="without-user flex justify-around text-white bg-black py-3">
                    <Link className="text-xl" to="/">Home</Link>
                    <Logout setLoginState={setLoginState} />
                </div>
            )}


        </nav>
    )
}


export default Navbar