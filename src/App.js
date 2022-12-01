import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState("");

  const eventHander = (e) => {
    setState(e.target.value);
  };

  const addTodoHandler = (e) => {
    const newTodo = {
      id: new Date().getTime(),
      body: state,
    };
    if (state !== "") {
      setTodos([...todos, newTodo]);
    }
    setState("");
  };

  return (
    <div className="layout">
      <div className="inputGroup">
        <input
          id="body"
          maxLength={30}
          className="add-input"
          placeholder="할 일을 입력해주세요 :)"
          value={state}
          onChange={eventHander}
        />
        <button className="add-button" onClick={addTodoHandler}>
          추가하기
        </button>
      </div>
      <h2 style={{ textAlign: "center" }}>Todo List</h2>
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <div className="todo-card" key={todo.id}>
              {todo.body}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
