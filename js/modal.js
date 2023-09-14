let modal = document.getElementById("modalWindow");
let openButton = document.getElementById("openMod");

document.addEventListener("DOMContentLoaded", () => {
  let focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  let firstFocusable = focusable[0];
  let lastFocusable = focusable[focusable.length - 1];

  openButton.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false"); // ARIA: indicate the modal is open
    firstFocusable.focus();
  });

  firstFocusable.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal();
  });

  // Trap focus inside the modal
  modal.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else if (event.key === "Tab") {
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    } else if (event.key === "Escape") {
      closeModal();
    }
  });
});

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true"); // ARIA: indicate the modal is closed
  openButton.focus();
}
