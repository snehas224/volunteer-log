// Keep track of total hours
let totalHours = 0;

// DOM elements
const form = document.getElementById("volunteerForm");
const tableBody = document.getElementById("logTable").getElementsByTagName("tbody")[0];
const totalHoursDisplay = document.getElementById("totalHours");

// Load saved entries from localStorage
let entries = JSON.parse(localStorage.getItem("volunteerLogEntries")) || [];
renderEntries();

// Add new entry
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const club = document.getElementById("club").value;
  const hours = parseFloat(document.getElementById("hours").value);
  const notes = document.getElementById("notes").value;

  const newEntry = { date, club, hours, notes };
  entries.push(newEntry);

  localStorage.setItem("volunteerLogEntries", JSON.stringify(entries));

  renderEntries();
  form.reset();
});

// Render entries and total hours
function renderEntries() {
  tableBody.innerHTML = "";
  totalHours = 0;

  entries.forEach((entry, index) => {
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = entry.date;
    row.insertCell(1).innerText = entry.club;
    row.insertCell(2).innerText = entry.hours;
    row.insertCell(3).innerText = entry.notes;

    totalHours += entry.hours;

    // Add delete button
const deleteCell = row.insertCell(4); // 5th column
const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.style.cursor = "pointer";
deleteBtn.addEventListener("click", function() {
  entries.splice(index, 1);
  localStorage.setItem("volunteerLogEntries", JSON.stringify(entries));
  renderEntries();
});
deleteCell.appendChild(deleteBtn);

  });

  totalHoursDisplay.innerText = totalHours;
}

