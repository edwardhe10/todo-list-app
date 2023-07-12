import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // handle whitespace
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // add tasks to bottom of list instead of top
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });

    //const newTodos = [todo, ...todos];
    //setTodos(newTodos);
    //console.log(todo, ...todos);
  };

  const updateTodo = (todoId, newValue) => {
    // handle whitespace
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      // toggle between true and false
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
