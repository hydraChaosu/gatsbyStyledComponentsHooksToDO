import React, { useState, useEffect } from "react"
import styled from "styled-components"
import AddTodo from "../components/AddTodo"
import TodoItem from "../components/TodoItem"
import TodoItemCompl from "../components/TodoItemCompl"
import axios from "axios"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
`

export default () => {
  const [id, setId] = useState(1)
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([
    { userId: 0, id: 0, title: "itemek", completed: false },
  ])

  useEffect(() => {
    console.log(text)
  }, [text])

  useEffect(() => {
    console.log(todos)
  }, [todos])

  useEffect(async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/todos")
    // console.log("mounted")
    // console.log(result.data.slice(0, 10))
    // dobre setTodos([...todos].concat(result.data.slice(0, 10)))
    // zle setTodos([...todos, result.data.slice(0,10)])
    setTodos([...todos].concat(result.data.slice(0, 10)))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setId(id + 1)
    setTodos([...todos, { userId: id, id: id, title: text, completed: false }])
    setText("")
  }

  const handleComplete = e => {
    e.preventDefault()
    const value = e.target.id
    const TodoCopy = [...todos]
    const result = TodoCopy.filter(item => {
      if (item.id == value) {
        item.completed = !item.completed
      }
      return item
    })
    setTodos(result)
  }

  const handleRemove = e => {
    e.preventDefault()
    const value = e.target.id
    const TodoCopy = [...todos]
    const result = TodoCopy.filter(item => {
      if (item.id != value) {
        return item
      }
    })
    setTodos(result)
  }
  return (
    <>
      <Container>
        <AddTodo handleSubmit={handleSubmit} text={text} setText={setText} />
        <ul>
          {todos.map(item => {
            return (
              <>
                {!item.completed ? (
                  <TodoItem
                    key={item.id}
                    item={item}
                    handleComplete={handleComplete}
                    handleRemove={handleRemove}
                  />
                ) : null}
              </>
            )
          })}
        </ul>
        <ul>
          {todos.map(item => {
            return (
              <>
                {item.completed ? (
                  <TodoItemCompl
                    key={item.id}
                    item={item}
                    handleComplete={handleComplete}
                    handleRemove={handleRemove}
                  />
                ) : null}
              </>
            )
          })}
        </ul>
      </Container>
    </>
  )
}

// podbierz to do

// where can be hooks
// <form onSubmit={handleSubmit}>
// <input
//   type="text"
//   onChange={e => setText(e.target.value)}
//   value={text}
// />
// <button>Add to do</button>
// </form>
