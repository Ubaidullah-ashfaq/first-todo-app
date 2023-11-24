function addTodo() {
    let todoInput = document.getElementById('todo-input');
    let todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() !== '') {
        let li = document.createElement('li');
        li.innerHTML = `${todoInput.value} <button onclick="removeTodo(this)">DELETE IT</button>`;
        todoList.appendChild(li);
        todoInput.value = '';
    }
    else {
        alert('Please wrote something');
    }
}

function removeTodo(button) {
    let todoList = document.getElementById('todo-list');
    let li = button.parentNode;
    todoList.removeChild(li);
}
