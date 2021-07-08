const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const todoStorage = [];

function handleSaveTodo () {
    localStorage.setItem("todoStorage", JSON.stringify(todoStorage));
}

function handleDeleteTodo (event) {
    const deleteList = event.target.parentElement;
    deleteList.remove();
}

function handleMakeTodo (newTodo) {
    const newList = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodo;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌"
    newList.appendChild(todoSpan);
    newList.appendChild(deleteButton);
    todoList.appendChild(newList);
    deleteButton.addEventListener("click", handleDeleteTodo);
}

function handleTodoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    handleMakeTodo(newTodo);
    todoStorage.push(newTodo);
    handleSaveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);