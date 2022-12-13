import React, { useState, useEffect } from "react";
import "./App.css";

// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once when the app start.

  useEffect(() => {
    getLocalTodos();
  }, [todos, status]);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //use Effect




  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // save to local

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
   if (localStorage.getItem("todos") === null ){
    localStorage.setItem("todos",JSON.stringify([]));
   }
   else{
   // let local = localStorage.getItem("todos",JSON.stringify(todos));
    //console.log(local);
    //setTodos(local);
    console.log(localStorage.getItem("todos"));
   }
  };

  return (
    <div className="App">
      <header>
        <h1>Jossi's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
