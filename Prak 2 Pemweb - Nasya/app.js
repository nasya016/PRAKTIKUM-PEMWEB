const dashboardImage = document.querySelector(".dashboard-img");
const noteSection = document.querySelector(".note-section");
const showNotesBtn = document.getElementById("showNotesBtn");
const showDashboardBtn = document.getElementById("showDashboardBtn");
const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const noteList = document.getElementById("noteList");

function formatTime(date) {
  return `${date.getHours().toString().padStart(2, '0')}:` +
         `${date.getMinutes().toString().padStart(2, '0')}`;
}

showNotesBtn.addEventListener("click", () => {
  dashboardImage.classList.add("hidden");
  noteSection.classList.remove("hidden");
  showNotesBtn.classList.add("hidden");
  showDashboardBtn.classList.remove("hidden");
});

showDashboardBtn.addEventListener("click", () => {
  dashboardImage.classList.remove("hidden");
  noteSection.classList.add("hidden");
  showNotesBtn.classList.remove("hidden");
  showDashboardBtn.classList.add("hidden");
});

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteText = noteInput.value.trim();
  if (noteText === "") return;

  const time = formatTime(new Date());

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${noteText} <small>(${time})</small></span>
    <button class="delete-btn">Hapus</button>
  `;

  noteList.appendChild(li);
  noteInput.value = "";
});

noteList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
