const menuButton = document.querySelector("#menu-button");
const rootElement = document.documentElement;

menuButton.addEventListener("click", () => {
  rootElement.toggleAttribute("menu-open");
});
