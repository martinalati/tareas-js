import './styles.css';
//import {saludar} from './js/componentes';
//import {Todo} from './classes/todo.class.js';
//import {TodoList} from './classes/todo-list.class';
import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml);

//todoList.todos[0].imprimirClase();

console.log ('todos', todoList.todos);


///////////////////////////////////////////////////////
/* todoList.todos.forEach(todo => crearTodoHtml(todo));
si el forEach devuelve un solo argumento y la funcion recibe solo un argumento
puedo utilizar la forma abreviada     */

//const tarea = new Todo('Aprender JavaScript');
//const tarea2 = new Todo('Aprender Webpack');

//todoList.nuevoTodo(tarea);
//todoList.nuevoTodo(tarea2);

//console.log(todoList);

//crearTodoHtml(tarea);

//localStorage.setItem('mi-key', 'ABC1223');
//sessionStorage.setItem('mi-key', 'ABC1223');

// setTimeout(()=> {

//     localStorage.removeItem('mi-key');
// }, 1500);
