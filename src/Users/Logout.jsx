import { useNavigate } from "react-router-dom";

const Logout = ({ setLoginState }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('token');
        navigate('/user/login')
        setLoginState(false)
    }
    return (
        <button className="text-xl" onClick={handleClick}>Logout</button>
    )
}

export default Logout