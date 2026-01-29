document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("volunteerForm");
  const tableBody = document.querySelector("#logTable tbody");
  const totalHoursDisplay = document.getElementById("totalHours");

  let entries = JSON.parse(localStorage.getItem("volunteerLogEntries")) || [];
  let totalHours = 0;

  // Render existing entries on page load
  renderEntries();

  // Add new entry
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const club = document.getElementById("club").value;
    const hours = parseFloat(document.getElementById("hours").value);
    const notes = document.getElementById("notes").value;

    if (!date || !club || isNaN(hours)) {
      alert("Please fill out all required fields correctly.");
      return;
    }

    const newEntry = { date, club, hours, notes };
    entries.push(newEntry);

    // Save to localStorage
    localStorage.setItem("volunteerLogEntries", JSON.stringify(entries));

    // Re-render table
    renderEntries();

    // Clear form
    form.reset();
  });

  // Function to render table and total hours
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

      // Delete button
      const deleteCell = row.insertCell(4);
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", function() {
        entries.splice(index, 1);
        localStorage.setItem("volunteerLogEntries", JSON.stringify(entries));
        renderEntries();
      });
      deleteCell.appendChild(deleteBtn);
    });

    totalHoursDisplay.innerText = totalHours;
  }
});
