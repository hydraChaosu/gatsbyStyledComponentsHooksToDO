import React, { useState, useEffect } from "react"
import styled from "styled-components"

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
  const [count, setCount] = useState(0)
  const [id, setId] = useState(0)
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([
    { userId: 0, id: 0, title: "itemek", completed: false },
  ])
  // // let todolist = []
  // useEffect(() => {
  //   let todoList = [...todos].map(item => (
  //     <li id={item.id} key={item.id}>
  //       {item.title}
  //       <button id={item.id}>Remove todo</button>
  //       <button id={item.id} onClick={() => setTodos((item.completed = true))}>
  //         Complete to do
  //       </button>
  //     </li>
  //   ))
  // }, [todos])

  useEffect(() => {
    console.log(text)
  }, [text])

  useEffect(() => {
    console.log(todos)
  }, [todos])
  return (
    <>
      <Container>
        <h1>Kotek</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <form
          onSubmit={e => {
            // const prevTodos = [...todos]
            e.preventDefault()
            setId(id + 1)
            setTodos([
              ...todos,
              { userId: id, id: id, title: text, completed: false },
            ])
            setText("")
          }}
        >
          <input
            type="text"
            onChange={e => setText(e.target.value)}
            value={text}
          />
          <button>Add to do</button>
        </form>
        {/* <ul>{todoList}</ul> */}
      </Container>
    </>
  )
}
