import React from "react"

const TodoListCompl = ({ item, handleRemove, handleComplete }) => {
  return (
    <li key={item.id}>
      <p>{item.title}</p>

      <button id={item.id} onClick={handleComplete}>
        ucomplete todo
      </button>

      <button id={item.id} onClick={handleRemove}>
        remove todo
      </button>
    </li>
  )
}

export default TodoListCompl

// {item.completed ? null : (
//   <button id={item.id} onClick={handleComplete}>
//     ucomplete todo
//   </button>
// )}
