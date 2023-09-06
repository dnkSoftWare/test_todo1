import React, {useState} from "react";

// Компонента - Добавления дела
export const ToDoAdd = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handle_submit = (x) => {
        x.preventDefault();

        addTodo(value);
        setValue("")
    }
  return <div className="addItem">
    <form onSubmit={handle_submit}>
        <input type="text"
               name="name_todo"
               className="addItemInput"
               placeholder="add new todo"
               value={value}
               onChange={e => setValue(e.target.value)}
            />
        <button type="submit">Add</button>
    </form>
  </div>
}