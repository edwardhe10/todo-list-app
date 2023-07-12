import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {index + 1}. {todo.text}
      </div>
      <div className="icons">
        <RiDeleteBin5Line
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <BiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
