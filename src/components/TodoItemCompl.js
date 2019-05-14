import React from "react"

const TodoListCompl = ({ item, handleRemove, handleComplete }) => {
  return (
    <li>
      <p>{item.title}</p>
      <div className="inTodoItem">
        <button onClick={() => handleComplete(item.id)}>ucomplete todo</button>

        <button onClick={() => handleRemove(item.id)}>remove todo</button>
      </div>
    </li>
  )
}

export default TodoListCompl

// {item.completed ? null : (
//   <button id={item.id} onClick={handleComplete}>
//     ucomplete todo
//   </button>
// )}
