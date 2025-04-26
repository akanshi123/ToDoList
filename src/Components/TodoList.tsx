//Imports the react library and useState hook from the react module
import React, { useState } from "react";
import { Wrapper } from "./styles.module";
//Defines an interface which has three properties
interface ToDo {
  id: number; //A unique number
  text: string; //The todo text
  done: boolean; //A boolean indicating whether the todo is done
}
// Defines a functional Component which is a function that returns JSX
const ToDoList = () => {
  const [todos, setTodos] = useState<ToDo[]>([]); //The initial value of todos is an empty array of ToDo objects
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodoItem: ToDo = {
      id: todos.length + 1,
      text: newToDo,
      done: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewToDo("");
  };
  const handleToggleDone = (id: Number) => {
    const updatedToDos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedToDos);
  };
  const handleRemoveTodo = (id: number) => {
    const updatedToDos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedToDos);
  };
  return (
    <Wrapper>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newToDo}
          onChange={(event) => setNewToDo(event.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleToggleDone(todo.id)}>
              {todo.done ? "Undo" : "Delete"}
            </button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default ToDoList;
