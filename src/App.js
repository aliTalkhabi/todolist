import React, { useState } from "react";
import Styles from "./App.module.css";

const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random,
      todo: todo,
    };
    // add the to do the list
    setList([...list, newTodo]);
    // clear input box
    setInput("");
  };
  const deleteTodo = (id) => {
    // fliter out todo with be id
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.form}>
          <input
            className={Styles.input}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={Styles.addBtn} onClick={() => addTodo(input)}>
            Add
          </button>
          <ul className={Styles.parentList}>
            {list.map((todo) => (
              <li className={Styles.childList} key={todo.id}>
                {todo.todo}
                <button
                  className={Styles.deleteBtn}
                  onClick={() => deleteTodo(todo.id)}
                >
                  &#128465;
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
