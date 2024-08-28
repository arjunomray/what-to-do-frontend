import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"


function App() {
    let [loginState, setLoginState] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLoginState(true)
        }
    }, [])
    return (
        <>

            <Navbar loginState={loginState} setLoginState={setLoginState} />
            <main className="flex justify-center align-middle ">
                <Outlet context={{ setLoginState }}/>
            </main>
        </>
    )
}

export default App
