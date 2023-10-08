import React from "react";
// Компонента - Одно дело
export const ToDoItem = ({item, toggleComplete, dropTodo}) => {
    React.useEffect(() => {
        console.log(item);
    },[]);
    return <div className="todo_item">
        <input id={"check_input_"+item.id} type="checkbox" value={item.completed} onChange={() => toggleComplete(item.id)} />
        <div className="item_text">
            <label htmlFor={"check_input_"+item.id} className={item.completed ? "completed" : "uncompleted"}>{item.name}</label>
        </div>
        <button onClick={() => dropTodo(item.id)}>Drop</button>
    </div>
}