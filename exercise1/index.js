
document.querySelector("header > h1").textContent = "Fruits & Vegetables Corp";

const listLink = document.querySelector("a[href='#bananas'");
listLink.textContent = "Vegetables";
listLink.href = "#vegetables";

const main = document.getElementById("main").style.cssText 
    = "display: flex; flex-direction: column-reverse";


const aboutHeader = document.createElement("h2");
aboutHeader.textContent = "About";
document.getElementById("about").prepend(aboutHeader);

const contactHeader = document.createElement("h2");
contactHeader.textContent = "Contact";
document.getElementById("contact").prepend(contactHeader);

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./main.css";
document.querySelector("head").appendChild(cssLink);

document.querySelector("head > title").textContent = "Fruits & Vegetables Corp";