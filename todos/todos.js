import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let data = new FormData(todoForm);
    let todo = data.get('todo');
    await createTodo(todo);
    todoForm.reset();
    displayTodos();
    // on submit, create a todo, reset the form, and display the todos
});

async function displayTodos() {
    let todos = await getTodos();
    // fetch the todos
    todosEl.innerHTML = '';
    for (let todo of todos) {
        let renderedTodo = renderTodo(todo);
        renderedTodo.addEventListener('click', async () => {
            // be sure to give each todo an event listener
            await completeTodo(todo.id);
            // on click, complete that todo
            displayTodos();
        });
        todosEl.appendChild(renderedTodo);
    }
    // display the list of todos
}

window.addEventListener('load', async () => {
    // add an on load listener that fetches and displays todos on load
    displayTodos();
});


logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    await deleteAllTodos();
    // delete all todos
    displayTodos();
    // then refetch and display the updated list of todos
});
