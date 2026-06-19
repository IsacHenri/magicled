// script.js

// LOADER

const loader = document.getElementById("loader");
const loaderFill = document.getElementById("loaderFill");
const loaderPercent = document.getElementById("loaderPercent");

let progress = 0;

const interval = setInterval(() => {

    progress++;

    loaderFill.style.width = progress + "%";

    loaderPercent.innerText = progress + "%";

    if(progress >= 100){

        clearInterval(interval);

        setTimeout(() => {

            loader.classList.add("hidden");

            document.body.classList.remove("loading");

        }, 400);

    }

}, 1);

// NAVBAR

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// WHATSAPP PRODUTO

function sendWhatsapp(produto){

    const numero = "5511972968867";

    const mensagem =
        `Olá! Tenho interesse no produto: ${produto}`;

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
    );

}

// FORMULARIO

function enviarFormulario(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const quadro =
    document.getElementById("quadro").value;

    const detalhes =
    document.getElementById("detalhes").value;

    const numero = "5511999999999";

    const mensagem =
        `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
        `Nome: ${nome}%0A` +
        `Tamanho do quadro desejado: ${quadro}%0A` +
        `Detalhes: ${detalhes}`;

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
    );

}



// MENU MOBILE

const navToggle =
document.getElementById("navToggle");

const navLinks =
document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// =========================
// SCROLL REVEAL
// =========================

const sr = ScrollReveal({

    distance: "80px",
    duration: 1400,
    delay: 150,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: false

});

// HERO
sr.reveal(".hero-content", {

    origin: "top"

});

// SECTION TITLES
sr.reveal(".section-title", {

    origin: "top"

});

// ABOUT CARDS
sr.reveal(".about-card", {

    origin: "bottom",
    interval: 200

});

// PRODUCT CARDS
sr.reveal(".product-card", {

    origin: "bottom",
    interval: 250

});

// CONTACT FORM
sr.reveal(".contact-form", {

    origin: "bottom"

});

// FOOTER
sr.reveal(".footer", {

    origin: "bottom"

});

// NAVBAR
sr.reveal(".header", {

    origin: "top",
    duration: 1000

});