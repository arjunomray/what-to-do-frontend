import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setLoginState } = useOutletContext()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:8000/users/login",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            'username': username,
            'password': password
          }),
        });
      if (!response.ok) {
        throw new Error("Login failed!");
      }
      const data = await response.json();


      const { access_token } = data;
      localStorage.setItem('token', access_token)
      setLoginState(true)

      navigate('/user/todos')
    }
    catch (error) {
      console.error(error.message)
    }
  }
  return (
    <>
      <div>
        <h3 className="text-4xl m-5 text-left">Login</h3>

        <form className="flex flex-col " onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User name"
            className="m-3 border-none outline-none hover:border-b-violet-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="m-3 border-none outline-none hover:border-b-violet-500"
          />
          <button className="bg-violet-400 p-2 rounded-md m-3" type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login;
