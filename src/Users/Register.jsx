import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'email': email,
                'hashed_password': password
            })
        })
        if (!response.ok) {
            throw new Error('Register failed!')
        } else {
            navigate('/user/login')
        }
    }
    console.log(import.meta.env.VITE_API_URL)
    return (
        <div className="p-1">
            <h3 className="text-4xl p-4">Register</h3>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="m-3 border-none outline-none hover:border-b-violet-500"
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="m-3 border-none outline-none hover:border-b-violet-500"
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="m-3 border-none outline-none hover:border-b-violet-500"
                />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="m-3 border-none outline-none hover:border-b-violet-500"
                />
                <br />
                <button className="bg-violet-400 px-10 py-2 rounded-md m-3" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register