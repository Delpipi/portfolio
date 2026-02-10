
const hamburger = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const links = document.querySelectorAll("nav a");
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date(document.lastModified);

// ================================================
// MENU HAMBURGER
// ================================================
hamburger.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le # dans l'URL
    hamburger.classList.toggle('open');
    navigation.classList.toggle('open');
});

// ================================================
// NAVIGATION ACTIVE
// ================================================
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        if (!link.href.includes('#')) {
            links.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
});

// ================================================
// FOOTER - Date et année
// ================================================
currentYear.textContent = today.getFullYear();
lastModified.textContent = today.toLocaleDateString('fr-FR');