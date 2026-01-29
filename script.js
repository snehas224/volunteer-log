// Keep track of total volunteer hours
let totalHours = 0;

// Get form and table elements
const form = document.getElementById("volunteerForm");
const tableBody = document.getElementById("logTable").getElementsByTagName("tbody")[0];
const totalHoursDisplay = document.getElementById("totalHours");

// When form is submitted
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get values from form
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

  // Clear form for next entry
  form.reset();
});
