const submitForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#login-form input");
const greetMessage = document.querySelector("#greeting");

function handleNameSubmit (event) {
    event.preventDefault();
    submitForm.classList.add("hidden");
    greetMessage.innerText = `hello, ${nameInput.value}`;
    greetMessage.classList.remove("hidden");
    localStorage.setItem("userName", nameInput.value);
}

console.log(nameInput);

const savedName = localStorage.getItem("userName");
if (savedName === null) {
    submitForm.classList.remove("hidden");
    submitForm.addEventListener("submit", handleNameSubmit);
} else {
    greetMessage.innerText = `hello, ${savedName}`;
    greetMessage.classList.remove("hidden");
}