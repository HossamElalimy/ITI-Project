(function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("primary-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    setOpen(!isOpen);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
