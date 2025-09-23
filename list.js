const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-Btn");
const taskList = document.getElementById("task-List");

let tasks = []; 

// function render tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.map((task, index) => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow";

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "flex-1 cursor-pointer " + 
      (task.done ? "line-through text-gray-500" : "");
    span.onclick = () => toggleTask(index);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 ml-5";
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// function add new task
function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, done: false });
    taskInput.value = "";
    renderTasks();
  }
}

//  function delet task
function deleteTask(index) {
  tasks = tasks.filter((_, i) => i !== index);
  renderTasks();
}

// function toggletask
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});
