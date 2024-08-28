import { useState, useEffect } from "react"
import ListTodos from "./list-todos"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const token = localStorage.getItem('token')
    const [inputValue, setInputValue] = useState("")

    const fetchTodos = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                console.error("Error fetching todos")
            } else {
                const data = await response.json()
                setTodos(data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchTodos();
    }, [])
    const handleInput = async (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/todos/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name: inputValue }),
            })
            if (response.ok) {
                setInputValue("")
                fetchTodos()
            } else {
                console.error("Error adding item")
            }
        } catch (error) {
            console.error("Error adding item", error)
        }
    }
    return (
        <>
            {token ? (
                <div className="flex flex-col items-center justify-between ">
                    <form className="m-4 border-solid border-violet-500" onSubmit={handleInput}>
                        <input
                            className="m-2 p-2 placeholder:text-lg outline-none border-b-0 focus:border-b-2 border-violet-500"
                            placeholder="Enter your todos"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button className="m-2 py-2 px-4 rounded-lg text-lg bg-violet-400" onClick={handleInput}>Enter</button>
                    </form>
                    <ListTodos myTodos={todos} setMyTodos={setTodos} />
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Todo
