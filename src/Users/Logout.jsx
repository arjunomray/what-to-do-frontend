import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('token');
        navigate('/user/login')
    }
    return (
        <button className="text-xl" onClick={handleClick}>Logout</button>
    )
}

export default Logout