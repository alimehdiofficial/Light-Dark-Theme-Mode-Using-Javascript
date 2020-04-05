let body = document.body;
let toggleBtn = document.querySelector(".toggle-btn");
let currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  body.classList.add("light-theme");
}
toggleBtn.addEventListener("click", function () {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "active");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
