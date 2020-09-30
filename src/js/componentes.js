//import '../css/componentes.css';

import {Todo} from '../classes';
import { todoList } from '../index';

//Referencia en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtImput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltors     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) => {

    const htmlTodo =`
        <li class="${(todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : '' }>
							<label>${ todo.tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
        </li>`;
    
        const div = document.createElement('div');
        div.innerHTML = htmlTodo;

        divTodoList.append(div.firstElementChild);

        return div;
}

//Eventos
txtImput.addEventListener('keyup',(event)=>{
    //console.log(event); ver teclas pulsadas
    if(event.keyCode==13 && txtImput.value.length > 0 ){

        //console.log(txtImput.value );
        const nuevoTodo = new Todo( txtImput.value );

        todoList.nuevoTodo(nuevoTodo);
        //console.log(todoList);
        crearTodoHtml(nuevoTodo);
        txtImput.value='';

    }
});

divTodoList.addEventListener('click', (event) => {

    console.log('click');
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento =event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')){ //click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if ( nombreElemento.includes('button') ){
        
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);

    }
    //console.log(todoList);
    //console.log(nombreElemento);

});

btnBorrar.addEventListener('click', () => {
    
    todoList.elminarCompletados();
    for( let i = divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltors.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if(!filtro) {return;}

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ){

        console.log(elemento);
        elemento.classList.remove('hidden'); //Por defecto Todos

        const completado= elemento.classList.contains('completed');
        switch (filtro){
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
            break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
            break;

        }
    }

});