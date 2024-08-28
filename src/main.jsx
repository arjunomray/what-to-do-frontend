import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Users/Login.jsx'
import Register from './Users/Register.jsx'
import "./index.css"
import Todo from './components/todos.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "user/login",
                element: <Login />
            },
            {
                path: "user/register",
                element: <Register />
            },
            {
                path: "user/todos",
                element: <Todo />
            }

        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
