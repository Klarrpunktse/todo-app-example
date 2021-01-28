import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

import "./index.css";

function App() {
  const firstRender = useRef(true);
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    // so we cant add an empty todo
    if (inputValue.trim() === "") return;

    setTodos([
      ...todos,
      {
        text: inputValue,
        id: uuidv4(),
      },
    ]);

    // clear input
    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // return all the elements we have but not the one
    // we click on
  };

  useEffect(() => {
    // save todos in local storage

    // if the variable firstRender is true at the beginning
    if (firstRender.current) {
      console.log("true");
      firstRender.current = false;
    } else {
      localStorage.setItem("Todo", JSON.stringify([...todos]));
      console.log("not first page load");
    }
    //every time todos change this will fire
  }, [todos]);

  // get todos from localstorage
  useEffect(() => {
    if (localStorage.getItem("Todo") !== null) {
      const newTodos = localStorage.getItem("Todo");
      setTodos(JSON.parse([...todos, newTodos]));
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addTodo}>
          <input
            autoFocus
            type="text"
            placeholder="Add a task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add ToDo</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <p>{todo.text}</p>
            <i
              onClick={() => removeTodo(todo.id)}
              className="far fa-trash-alt"
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
