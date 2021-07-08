const clockForm = document.querySelector("#clock, h2");


function timeRefresh () {
    const date = new Date();
    const padHours = String(date.getHours()).padStart(2, "0");
    const padMinutes = String(date.getMinutes()).padStart(2, "0");
    const padSeconds = String(date.getSeconds()).padStart(2, "0");
    const padMilliseconds = parseInt(date.getMilliseconds()/100);
    clockForm.innerText = `${padHours}:${padMinutes}:${padSeconds}.${padMilliseconds}`;
}

timeRefresh();
setInterval(timeRefresh, 100);