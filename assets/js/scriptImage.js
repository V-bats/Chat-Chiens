// Selection des elements HTML
const image = document.getElementById("img");
const btnChat = document.getElementById("cat");
const btnChien = document.getElementById("dog");
const btnfavoris= document.getElementById('favoris')

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
 
function recupFavoris() {
    const data = localStorage.getItem("favoris");
    if (!data) return [];
    return JSON.parse(data);
}

function sauvegardeFavoris(favs) {
    localStorage.setItem("favoris", JSON.stringify(favs));
    console.log(favs);
}

btnfavoris.addEventListener('click', function () {
    const newFav = image.src;
    const favs = recupFavoris();

    if (favs.includes(newFav)) {
        alert("déjà dans les favoris !");
        return;
    }

    favs.push(newFav);
    sauvegardeFavoris(favs);

    alert('Ajouté aux favoris !');
});

