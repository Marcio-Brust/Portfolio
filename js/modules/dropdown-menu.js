import outsideClick from "./outsideclick.js";

export default function initiDropDownMenu() {
  const dropdownMenus = document.querySelectorAll(".dropdown");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
    menu.addEventListener("click", handleClick);
  });
  function handleClick(event) {
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
