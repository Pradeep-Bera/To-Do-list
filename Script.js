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

    }
}

