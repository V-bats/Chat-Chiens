const btnTheme = document.getElementById("btnTheme");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
changeTheme(savedTheme);

btnTheme.addEventListener("click", () => {
    if(body.classList.contains("dark")) {
        changeTheme("light");
    }
    else {
        changeTheme("dark")
    }
});

function changeTheme(theme) {
    body.classList.remove("light", "dark");
    body.classList.add(theme);

    if(btnTheme.textContent === "mode clair 🌞") {
        btnTheme.textContent = "mode sombre 🌜";
        btnTheme.style.background = "grey";
    }else {
        btnTheme.textContent = "mode clair 🌞";
        btnTheme.style.background = "white";
    }
    localStorage.setItem("theme", theme);
}

// Selection des elements HTML
const image = document.getElementById("img");
const btnChat = document.getElementById("cat");
const btnChien = document.getElementById("dog");
 
// Fonction qui charge une image aleatoire
async function chargerImage(type) {
    let url;
 
    if (type === "chat") {
        url = "https://api.thecatapi.com/v1/images/search";
    } else {
        url = "https://dog.ceo/api/breeds/image/random";
    }
 
    const response = await fetch(url);
 
    if (!response.ok) {
        throw new Error('Erreur API');
    }
 
    const data = await response.json();
 
    if (type === "chat") {
        return data[0].url;
    } else {
        return data.message;
    }
}
 
// Fonction async
async function afficherImage(type) {
    btnChat.disabled = true;
    btnChien.disabled = true;
 
    image.src = "./assets/images/patientez.webp";
 
    try {
        const nouvelleImage = await chargerImage(type);
        image.src = nouvelleImage;
    } catch (erreur) {
        image.src = "./assets/img/error.webp";
    }
 
    btnChat.disabled = false;
    btnChien.disabled = false;
}
 
// Evenements click
btnChat.addEventListener("click", () => afficherImage("chat"));
btnChien.addEventListener("click", () => afficherImage("chien"));

