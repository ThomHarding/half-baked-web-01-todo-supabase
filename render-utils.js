export function renderTodo(todo) {
    let newDiv = document.createElement('div');
    let newPara = document.createElement('p');
    // create a div and a p tag
    if (todo.complete === true) {
        newDiv.classList.add('complete');
    } else {
        newDiv.classList.add('incomplete');
    }
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    newDiv.classList.add('todo');
    // add the 'todo' css class no matter what
    newPara.textContent = todo.todo;
    // put the todo's text into the p tag
    newDiv.appendChild(newPara);
    // append stuff
    return newDiv;
    // return the div
}