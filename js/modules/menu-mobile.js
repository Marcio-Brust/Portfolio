export default function initiMenuMobile() {
  const button = document.querySelector(".btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
  }

  button.addEventListener("click", toggleMenu);
}
