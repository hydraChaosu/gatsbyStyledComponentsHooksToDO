import React from "react"

const TodoItem = ({ item, handleComplete, handleRemove }) => {
  return (
    <li>
      <p>{item.title}</p>
      <div className="inTodoItem">
        <button onClick={() => handleComplete(item.id)}>complete todo</button>

        <button onClick={() => handleRemove(item.id)}>remove todo</button>
      </div>
    </li>
  )
}

export default TodoItem

// {item.completed ? null : (
//   <button id={item.id} onClick={handleComplete}>
//     complete todo
//   </button>
// )}
