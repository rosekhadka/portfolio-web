// Typing Effect
const text = [
    "Student",
    "Future Developer",
    "Tech Enthusiast",
    "Dreaming Big"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function type() {
    const el = document.querySelector(".typing");
    if (!el) return;

    if (!deleting && j <= text[i].length) {
        current = text[i].substring(0, j++);
    } else if (deleting && j >= 0) {
        current = text[i].substring(0, j--);
    }

    el.innerHTML = current;

    // Pause at the end of a word
    if (j === text[i].length + 1) {
        deleting = true;
        setTimeout(type, 1500); 
        return;
    }

    // Move to next word
    if (j === 0 && deleting) {
        deleting = false;
        i = (i + 1) % text.length;
        setTimeout(type, 500); 
        return;
    }

    setTimeout(type, deleting ? 50 : 100);
}

// Initialize typing effect on load
document.addEventListener("DOMContentLoaded", type);

// Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    // Toggle menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    
    // Close menu when a link is clicked (Mobile Fix)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}
