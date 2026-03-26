// Typing Effect
const text = [
    "Student",
    "Future Developer",
    "Tech Enthusiast",
    "Dreaming Big 🚀"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function type() {
    const el = document.querySelector(".typing");

    if (!deleting && j <= text[i].length) {
        current = text[i].substring(0, j++);
    } else if (deleting && j >= 0) {
        current = text[i].substring(0, j--);
    }

    el.innerHTML = current;

    if (j === text[i].length) {
        deleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (j === 0) {
        deleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});