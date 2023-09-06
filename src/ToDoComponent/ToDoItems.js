import React from "react";
import {ToDoItem} from "./ToDoItem";
// Компонента - Список дел
export const ToDoItems = ({listTodo, toggleComplete, dropTodo}) => {
  return <div className="list">
    {
      listTodo.map((todo, id) =>
      (<ToDoItem item={todo} key={id} toggleComplete={toggleComplete} dropTodo={dropTodo} />))
    }
  </div>
}