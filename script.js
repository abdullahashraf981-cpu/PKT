const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const navLinks = siteNav.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});
function toggleChat() {
    let chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();
    if (message === "") return;

    let chatBody = document.getElementById("chatBody");

    // User message
    let userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.innerText = message;
    chatBody.appendChild(userMsg);

    // Bot response
    let botMsg = document.createElement("div");
    botMsg.className = "bot-msg";

    let reply = "";

    if (message.toLowerCase().includes("oil")) {
        reply = "We provide high-quality cooking oil in wholesale quantities.";
    } else if (message.toLowerCase().includes("flour") || message.toLowerCase().includes("aata")) {
        reply = "We supply fresh and premium wheat flour (Aata).";
    } else if (message.toLowerCase().includes("sugar")) {
        reply = "We offer wholesale sugar at competitive prices.";
    } else if (message.toLowerCase().includes("rice")) {
        reply = "We supply premium quality rice for retail and wholesale.";
    } else if (message.toLowerCase().includes("contact")) {
        reply = "Please use the contact form or call our representative.";
    } else {
        reply = "Thank you for contacting Pak Kashmir Traders. Our team will respond soon.";
    }

    botMsg.innerText = reply;
    chatBody.appendChild(botMsg);

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}