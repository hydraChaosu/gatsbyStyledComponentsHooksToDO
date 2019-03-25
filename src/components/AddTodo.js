import React from "react"

const AddTodo = ({ handleSubmit, text, setText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <button>Add to do</button>
    </form>
  )
}

export default AddTodo
