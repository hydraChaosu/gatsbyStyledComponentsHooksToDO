import React from "react"

const TodoListCompl = ({ item, handleRemove }) => {
  return (
    <li key={item.id}>
      {item.title}

      <button id={item.id} onClick={handleRemove}>
        remove todo
      </button>
    </li>
  )
}

export default TodoListCompl
