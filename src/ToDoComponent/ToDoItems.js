import React from "react";
import {ToDoItem} from "./ToDoItem";
// Компонента - Список дел
export const ToDoItems = ({listTodo, toggleComplete, dropTodo}) => {
  return <div name="items">
    {
      listTodo.map((todo, id) =>
      (<ToDoItem item={todo} key={id} toggleComplete={toggleComplete} dropTodo={dropTodo} />))
    }
  </div>
}