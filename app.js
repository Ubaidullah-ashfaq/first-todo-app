function addTodo() {
    let todoInput = document.getElementById('todo-input');
    let todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() !== '') {
        let li = document.createElement('li');
        li.innerHTML = `<span>${todoInput.value}</span> 
                        <button  id = "edit" onclick="editTodo(this)">Edit</button>
                        <button onclick="removeTodo(this)">Delete</button>`;
        todoList.appendChild(li);
        todoInput.value = '';
    } else {
        alert('Please write something');
    }
}

function removeTodo(button) {
    let todoList = document.getElementById('todo-list');
    let li = button.parentNode;
    todoList.removeChild(li);
}

function editTodo(button) {
    let li = button.parentNode;
    let span = li.querySelector('span');
    
    let newTask = prompt('Edit task:', span.innerText);
    
    if (newTask !== null) {
        span.innerText = newTask;
    }
}
