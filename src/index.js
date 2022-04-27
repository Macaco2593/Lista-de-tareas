import "./styles.css"

import { Todo, TodoList } from "./classes"
import { crearTodoHtml } from "./js/componentes";


export const todoList = new TodoList();

// const tarea = new Todo("Aprender JavaScript!!");
// todoList.nuevoTodo ( tarea );


// console.log( todoList)

// crearTodoHtml( tarea );

// localStorage.setItem("my-key", "ABC1233");
// sessionStorage.setItem("my-key", "ABC1234")

// setTimeout( () =>{

//     localStorage.removeItem("my-key")

// }, 1500 )

// todoList.todos.forEach( todo => crearTodoHtml( todo )) Lo mismo que:
todoList.todos.forEach( crearTodoHtml )

console.log("todos", todoList.todos )