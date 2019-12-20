
// Text content in header h1 is wrong, should be Fruits & Vegetables Corp
document.querySelector("header > h1").textContent = "Fruits & Vegetables Corp";

// The last a tag in header ul has wrong text content and href attribute 
// (should be Vegetables and not Bananas)
const listLink = document.querySelector("a[href='#bananas'");
listLink.textContent = "Vegetables";
listLink.href = "#vegetables";

// The section #contact and #about are in the wrong order. Swap them.
// document.getElementById("main").style.cssText
//     = "display: flex; flex-direction: column-reverse";

document.getElementById("main")
    .insertBefore(document.getElementById("about"), document.getElementById("contact"));


// MÅSTE LIGGA OAVNFÖR ABOUTHEADER FÖR ATT INTE TA BORT ALLT! 
// document.getElementById("about").textContent = "";

// Each section should have a h2 tag at the top with corresponding text according to its id
const aboutHeader = document.createElement("h2");
aboutHeader.textContent = "About";
document.getElementById("about").prepend(aboutHeader);

const contactHeader = document.createElement("h2");
contactHeader.textContent = "Contact";
document.getElementById("contact").prepend(contactHeader);

// The text "We're the best in fruits & vegetables" under #about should be wrapped in a p tag
document.getElementById("about").childNodes[1].remove();

const newPTag = document.createElement("p");
newPTag.textContent = "We're the best in fruits & vegetables";
document.getElementById("about").appendChild(newPTag);

// The developer used td elements in thead instead of th. Fix it.
const newNameTh = document.createElement("th");
newNameTh.textContent = "Name";
document.querySelector("thead > tr > td").replaceWith(newNameTh);

const newEmailTh = document.createElement("th");
newEmailTh.textContent = "Email";
document.querySelector("thead > tr")
    .replaceChild(newEmailTh, document.querySelector("thead > tr > td"));

// The developer forgot to include the main.css file. Add it to head.
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./main.css";
document.head.appendChild(cssLink);

// Head title is wrong MDN info. Should be "Fruits & Vegetables Corp"
document.title = "Fruits & Vegetables Corp";