const inputBox = document.querySelector('.task');
const addButton = document.querySelector('.list-container');

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        addButton.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}
addButton.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", addButton.innerHTML);
}
function showTask() {
    addButton.innerHTML = localStorage.getItem("data");
}
showTask();