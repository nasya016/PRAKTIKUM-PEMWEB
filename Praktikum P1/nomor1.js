document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="completeTask(this)">✔</button> <button onclick="deleteTask(this)">Hapus</button>`;
    document.getElementById("taskList").appendChild(li);
    saveTasks();
    taskInput.value = "";
}

function completeTask(button) {
    let li = button.parentElement;
    li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.childNodes[0].nodeValue,
            completed: li.style.textDecoration === "line-through"
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task.text} <button onclick="completeTask(this)">✔</button> <button onclick="deleteTask(this)">Hapus</button>`;
        if (task.completed) li.style.textDecoration = "line-through";
        document.getElementById("taskList").appendChild(li);
    });
}
