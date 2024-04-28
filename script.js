const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
    sidebar.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
    closeBtn.classList.add("hide");
    menuBtn.classList.remove("hide");
    sidebar.classList.remove("visible");
});

// Hide the close button and sidebar initially
closeBtn.classList.add("hide");
sidebar.classList.remove("visible");