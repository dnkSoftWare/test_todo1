import React, {useState, useRef} from "react";

// Компонента - Добавления дела
export const ToDoAdd = ({addTodo}) => {
    const [value, setValue] = useState("")
    const newToDoRef = useRef(null);
    const handle_submit = (x) => {
        x.preventDefault();
        // setValue();
        addTodo(newToDoRef.current.value);
        newToDoRef.current.value = ``;
        newToDoRef.current.focus();
        // addTodo(value);
        // setValue("")
    }
  return <div className="addItem">
    <form onSubmit={handle_submit}>
        <input type="text"
               name="name_todo"
               className="addItemInput"
               placeholder="add new todo"
               // value={value}
               // onChange={e => setValue(e.target.value)}
               ref = {newToDoRef}
            />
        <button type="submit">Add</button>
    </form>
  </div>
}