import React, {useState} from "react";
import {ToDoHeader} from "./ToDoHeader";
import {ToDoAdd} from "./ToDoAdd";
import {ToDoItems} from "./ToDoItems";
import './ToDo.css'

// Общая компонента - Список дел. Состоит из заголовка, добавления нового и списка дел
export const ToDoList = ()=>{
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
      setTodos([...todos,{id:Date.now(), name: todo, completed: false }]);
      console.log(todos)
    }
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo))
    }
    const dropTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    return <div name="todolist">
        <ToDoHeader title="ToDo list"/>
        <ToDoAdd addTodo={addTodo}/>
        <ToDoItems listTodo={todos}
                   toggleComplete={toggleComplete}
                   dropTodo = {dropTodo}
        />
    </div>
}