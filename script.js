// Keep track of total hours
let totalHours = 0;

// Get references to DOM elements
const form = document.getElementById("volunteerForm");
const tableBody = document.getElementById("logTable").getElementsByTagName("tbody")[0];
const totalHoursDisplay = document.getElementById("totalHours");

// When form is submitted
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Get form values
  const date = document.getElementById("date").value;
  const club = document.getElementById("club").value;
  const hours = parseFloat(document.getElementById("hours").value);
  const notes = document.getElementById("notes").value;

  // Add a new row to the table
  const newRow = tableBody.insertRow();
  newRow.insertCell(0).innerText = date;
  newRow.insertCell(1).innerText = club;
  newRow.insertCell(2).innerText = hours;
  newRow.insertCell(3).innerText = notes;

  // Update total hours
  totalHours += hours;
  totalHoursDisplay.innerText = totalHours;

  // Clear form
  form.reset();
});
