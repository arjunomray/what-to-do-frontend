import { Link } from "react-router-dom"
import Logout from "../Users/Logout.jsx"

const Navbar = () => {

    const token = localStorage.getItem('token')
    return (
        <nav>
            <h1 className="text-5xl p-3 font-bold">what to do...</h1>
            {!token ? (
                <div className="without-user flex justify-around text-white bg-black py-3">
                    <Link to="user/login">Sign In</Link>
                    <Link to="user/register">Register</Link>
                </div>
            ) : (
                <div className="without-user flex justify-around text-white bg-black py-3">
                    <Link className="text-xl" to="/">Home</Link>
                    <Logout />
                </div>
            )}


        </nav>
    )
}

export default Navbar