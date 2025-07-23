// Show/Hide sections
function showSection(id) {
  const sections = document.querySelectorAll('.tool-section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Show default section on load
document.addEventListener('DOMContentLoaded', () => {
  showSection('gpa');
});

// GPA Calculator Logic
let totalPoints = 0;
let totalCredits = 0;

function addCourse() {
  const grade = parseFloat(document.getElementById('grade').value);
  const credits = parseFloat(document.getElementById('credits').value);

  if (isNaN(grade) || isNaN(credits)) {
    alert("Please enter valid values.");
    return;
  }

  totalPoints += grade * credits;
  totalCredits += credits;

  const li = document.createElement("li");
  li.textContent = `Grade: ${grade}, Credits: ${credits}`;
  document.getElementById("course-list").appendChild(li);

  const gpa = totalPoints / totalCredits;
  document.getElementById("gpa-result").textContent = gpa.toFixed(2);

  // Reset inputs
  document.getElementById('grade').value = '';
  document.getElementById('credits').value = '';
}

// Planner Logic
document.getElementById("planner-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const task = document.getElementById("task-input").value;
  const dueDate = document.getElementById("due-date-input").value;

  if (!task || !dueDate) {
    alert('Please enter both a task and a due date.');
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${task} (Due: ${dueDate}) `;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.onclick = () => {
    li.style.textDecoration = "line-through";
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  document.getElementById("task-list").appendChild(li);

  // Reset inputs
  document.getElementById("planner-form").reset();
});

// Budgeting Tool
let income = 0;
let expenses = 0;

document.getElementById("budget-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const description = document.getElementById("budget-description").value;
  const amount = parseFloat(document.getElementById("budget-amount").value);
  const type = document.getElementById("budget-type").value;

  if (!description || isNaN(amount)) {
    alert('Enter valid description and amount.');
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${type === "income" ? "+" : "-"} $${amount.toFixed(2)} - ${description}`;
  document.getElementById("budget-list").appendChild(li);

  if (type === "income") {
    income += amount;
  } else {
    expenses += amount;
  }

  document.getElementById("total-income").textContent = income.toFixed(2);
  document.getElementById("total-expenses").textContent = expenses.toFixed(2);
  document.getElementById("balance").textContent = (income - expenses).toFixed(2);

  document.getElementById("budget-form").reset();
});

// Self-Care Checklist Reset
function resetChecklist() {
  const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
  checkboxes.forEach(box => box.checked = false);
}

