/ Dark / Light Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.innerHTML = document.body.classList.contains("dark")
    ? "<i class='bx bx-sun'></i>"
    : "<i class='bx bx-moon'></i>";
});
