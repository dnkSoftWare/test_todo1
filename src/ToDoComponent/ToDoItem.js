import React from "react";
// Компонента - Одно дело
export const ToDoItem = ({item, toggleComplete, dropTodo}) => {

    return <div className="todo_item">
        <input type="checkbox" value={item.completed} onChange={() => toggleComplete(item.id)} />
        <p className={item.completed ? "completed" : ""}>{item.name}</p>
        <button onClick={() => dropTodo(item.id)}>Drop</button>
    </div>
}