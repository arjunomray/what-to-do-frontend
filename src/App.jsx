import Todo from "./components/todos"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

function App() {
    return (
        <>

            <Navbar />
            <main className="flex justify-center align-middle ">
                <Outlet />
            </main>
            <Todo />
        </>
    )
}

export default App
