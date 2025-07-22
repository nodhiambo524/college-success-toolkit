// planner.js
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (!task) return;

  const list = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;

  list.appendChild(li);
  input.value = "";
}

