const ListTodos = ({ myTodos, setMyTodos }) => {
  const token = localStorage.getItem('token')

  const handleClick = async (todo) => {
    const response = await fetch(`http://localhost:8000/todos/update_state/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        ...todo,
        "is_complete": !todo.is_complete
      })
    })

    if (!response.ok) {
      console.error("Failed updated todo:")
    } else {
      setMyTodos((prevTodos) =>
        prevTodos.map((item) =>
          item.id === todo.id ?
            { ...item, is_complete: !todo.is_complete }
            : item
        )
      )
    }
  }

  const handleEdit = async (todo) => {

    const name = prompt("Enter new name")

    const response = await fetch(`http://localhost:8000/todos/update_state/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        ...todo,
        "name": name
      })
    })

    if (!response.ok) {
      console.error("Failed updating todo")
    } else {
      setMyTodos((prevTodos) =>
        prevTodos.map((item) =>
          item.id === todo.id ?
            { ...item, name: name }
            : item
        )
      )
    }
  }
  const handleDelete = async (todo) => {
    const response = await fetch(`http://localhost:8000/todos/delete/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
      },
    })

    if (!response.ok) {
      console.error("Failed deleting todo")
    } else {
      setMyTodos((prevTodos) =>
        prevTodos.filter(item => item.id !== todo.id)
      )
    }
  }

  return (
    <>
      <h2 className="text-3xl font-semibold">List my todos</h2>
      <div className="flex flex-col items-center w-[100vw]">
        {myTodos.map((todo) => (
          <div
            key={todo.id}
            style={{ cursor: "pointer" }}
            className=" flex flex-row justify-around"
          >
            <p
              className="px-16 py-1"
              onClick={() => { handleClick(todo) }}
            >{todo.is_complete ? <i><s>{todo.name}</s></i> : todo.name}</p>
            <div className="flex justify-end">
              <button className="edit p-1" onClick={() => { handleEdit(todo) }}>edit</button>
              <button className="delete p-1" onClick={() => { handleDelete(todo) }}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


export default ListTodos
