import React from "react"

const TodoItem = ({ item, handleComplete, handleRemove }) => {
  return (
    <li key={item.id}>
      <p>{item.title}</p>
      <div className="inTodoItem">
        <button id={item.id} onClick={handleComplete}>
          complete todo
        </button>

        <button id={item.id} onClick={handleRemove}>
          remove todo
        </button>
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
