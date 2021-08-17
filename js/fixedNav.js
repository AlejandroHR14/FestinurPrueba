document.querySelector(".show-menu").addEventListener("click", () => {
  document.getElementById("span").classList.toggle("menu-visible");
  document.querySelector(".menu-icon").classList.toggle("spin-menu");
});