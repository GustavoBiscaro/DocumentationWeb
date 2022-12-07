const myImage = document.querySelector("img");
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

function trocarImagens() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "img/firefox.webp") {
        myImage.setAttribute("src", "img/chrome.png");
    } else {
        myImage.setAttribute("src", "img/firefox.webp");
    }
};
function trocarTexto() {
    const mySrc = myImage.getAttribute("src");
    if(mySrc == "img/firefox.webp"){
        myHeading.textContent = "Mozilla is cool";
    } else {
        myHeading.textContent = "Mas eu prefiro o Chrome!";
    }
}

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla é legal, ${storedName}`;
    }
}

myButton.onclick = () => {
    setUserName(); 
};

myImage.onclick = () => {
    trocarImagens();
    trocarTexto();
};