// MOBILE NAVIGATION
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuBtn.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    menuBtn.setAttribute("aria-expanded", isOpen);
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll("#nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// CONTACT FORM
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formStatus.textContent =
       ' Thank you, ${name}! Your form has been submitted successfuly.'

    contactForm.reset();
});

// PROJECT CARD ANIMATION ON SCROLL
const cards = document.querySelectorAll(
    ".about-card, .skill-card, .project-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(function (card) {
        card.classList.add("animate-card");
        observer.observe(card);
    });
}