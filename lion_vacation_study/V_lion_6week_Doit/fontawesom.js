function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

const toggleButton = document.querySelector(".nav-toggle");
toggleButton.addEventListener("click", toggleMenu);
