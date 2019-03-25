import React from "react"

const TodoItem = ({ item, handleComplete, handleRemove }) => {
  return (
    <li key={item.id}>
      {item.title}
      {item.completed ? null : (
        <button id={item.id} onClick={handleComplete}>
          complete todo
        </button>
      )}
      <button id={item.id} onClick={handleRemove}>
        remove todo
      </button>
    </li>
  )
}

export default TodoItem
