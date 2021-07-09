const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todoStorage = [];

function handleSaveTodo () {
    localStorage.setItem("todoStorage", JSON.stringify(todoStorage));
}

function handleDeleteTodo (event) {
    const deleteList = event.target.parentElement;
    todoStorage.pop(deleteList.children[0].innerText);
    deleteList.remove();
    todoStorage.filter((item) => item.id !== parseInt(deleteList.id));
    handleSaveTodo();
}

function handleMakeTodo (todoObj) {
    const newList = document.createElement("li");
    newList.id = todoObj.id
    const todoSpan = document.createElement("span");
    todoSpan.innerText = todoObj.text;
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
    const todoObj = {
        text: newTodo,
        id: Date.now()
    };
    handleMakeTodo(todoObj);
    todoStorage.push(todoObj);
    handleSaveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem("todoStorage");
if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    todoStorage = parsedTodo;
    parsedTodo.forEach(handleMakeTodo);
}