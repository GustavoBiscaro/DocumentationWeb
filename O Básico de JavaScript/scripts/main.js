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
}

function trocarTexto() {
    const mySrc = myImage.getAttribute("src");
    if(mySrc == "img/firefox.webp"){
        myHeading.textContent = "Mozilla is cool";
    } else {
        myHeading.textContent = "Mas eu prefiro o Chrome!";
    }
}

function setUserName() {
    const myName = prompt("Your name please!");
    if (!myName) {
        setUserName();
    } else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName(); 
};

myImage.onclick = () => {
    trocarImagens();
    trocarTexto();
};