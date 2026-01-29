// Simple login credentials (just for demonstration)
const USERNAME = "sneha";
const PASSWORD = "1234";

// DOM elements
const loginDiv = document.getElementById("loginDiv");
const appDiv = document.getElementById("appDiv");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const volunteerForm = document.getElementById("volunteerForm");
const tableBody = document.getElementById("logTable").getElementsByTagName("tbody")[0];
const totalHoursDisplay = document.getElementById("totalHours");

let entries = [];
let totalHours = 0;

// --------- LOGIN ---------
loginBtn.addEventListener("click", function() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  if(usernameInput === USERNAME && passwordInput === PASSWORD){
    loginDiv.style.display = "none";
    appDiv.style.display = "block";

    // Load saved entries if any
    if(localStorage.getItem("volunteerEntries")){
      entries = JSON.parse(localStorage.getItem("volunteerEntries"));
      renderEntries();
    }
  } else {
    alert("Wrong username or password!");
  }
});

// --------- LOGOUT ---------
logoutBtn.addEventListener("click", function(){
  appDiv.style.display = "none";
  loginDiv.style.display = "block";
});

// --------- ADD ENTRY ---------
volunteerForm.addEventListener("submit", function(e){
  e.preventDefault();

  const date = document.getElementById("date").value;
  const club = document.getElementById("club").value;
  const hours = parseFloat(document.getElementById("hours").value);
  const notes = document.getElementById("notes").value;

  const newEntry = { date, club, hours, notes };
  entries.push(newEntry);

  // Save to localStorage
  localStorage.setItem("volunteerEntries", JSON.stringify(entries));

  renderEntries();

  // Reset form
  volunteerForm.reset();
});

// --------- RENDER ENTRIES ---------
function renderEntries(){
  // Clear table
  tableBody.innerHTML = "";

  // Reset total
  totalHours = 0;

  // Add rows
  entries.forEach(entry => {
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = entry.date;
    row.insertCell(1).innerText = entry.club;
    row.insertCell(2).innerText = entry.hours;
    row.insertCell(3).innerText = entry.notes;

    totalHours += entry.hours;
  });

  totalHoursDisplay.innerText = totalHours;
}
