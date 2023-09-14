let discButton = document.getElementById("useDsicl");
let disclosure = document.getElementById("disclosureWindow");

document.addEventListener("DOMContentLoaded", () => {
  discButton.addEventListener("click", (e) => {
    if (disclosure.style.display === "block") {
      disclosure.style.display = "none";
    } else {
      disclosure.style.display = "block";
    }
  });
});
