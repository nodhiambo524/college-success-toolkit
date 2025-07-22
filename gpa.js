// gpa.js
let courses = [];

function addCourse() {
  const name = document.getElementById("courseName").value;
  const credits = parseFloat(document.getElementById("courseCredits").value);
  const grade = parseFloat(document.getElementById("courseGrade").value);

  if (!name || isNaN(credits) || isNaN(grade)) {
    alert("Please fill all fields correctly.");
    return;
  }

  courses.push({ name, credits, grade });
  updateCourseList();
  calculateGPA();
}

function updateCourseList() {
  const list = document.getElementById("courseList");
  list.innerHTML = "";
  courses.forEach(course => {
    const item = document.createElement("li");
    item.textContent = `${course.name}: ${course.credits} credits, Grade: ${course.grade}`;
    list.appendChild(item);
  });
}

function calculateGPA() {
  let totalCredits = 0;
  let totalPoints = 0;

  courses.forEach(course => {
    totalCredits += course.credits;
    totalPoints += course.credits * course.grade;
  });

  const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  document.getElementById("gpaResult").textContent = gpa;
}
