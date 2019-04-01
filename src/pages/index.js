import React, { useState, useEffect } from "react"
import styled from "styled-components"
import AddTodo from "../components/AddTodo"
import TodoItem from "../components/TodoItem"
import TodoItemCompl from "../components/TodoItemCompl"
import axios from "axios"
import "../styles/styles.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`
const AddTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 20%;
`

const TodoContainer = styled.div`
  flex-grow: 1;
  min-width: 80%;
`

export default () => {
  const [id, setId] = useState(11)
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
  // puste nawiasy za efektem dzialaja jak component did mount/unmount
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
        <AddTodoContainer className="addTodoContainer">
          <h1>Add Todo</h1>
          <AddTodo handleSubmit={handleSubmit} text={text} setText={setText} />
        </AddTodoContainer>
        <TodoContainer className="todoContainer">
          {todos.some(item => item.completed == false) && <h2>Todo</h2>}
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
          {todos.some(item => item.completed == true) && <h2>Done</h2>}
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
        </TodoContainer>
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
