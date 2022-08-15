import React, { useState } from "react";
import "./App.css";

export default function Content() {
  const [todo, setTodo] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const addTodo = () => {
    setTodo([...todo, todoItem]);
    setTodoItem("");
  };

  const deleteTodo = (item) => {
    const filteredItemList = todo.filter((todo) => todo !== item);
    setTodo(filteredItemList);
  };

  return (
    <div className="content">
      <h1 id="headerCaps">To Do List</h1>

      <input
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        type="text"
      />
      <button onClick={() => addTodo()}>Submit</button>
      {todo.map((todo) => (
        <>
          <p>{todo}</p>
          <button onClick={() => deleteTodo(todo)}>x</button>
        </>
      ))}
    </div>
  );
}
