const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".play-button")?.addEventListener("click", () => {
  window.open("https://vk.com/wall-235372952_480", "_blank", "noopener");
});
