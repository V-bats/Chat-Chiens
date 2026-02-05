const favorisList = document.getElementById("favorisList");
const emptyMsg = document.getElementById("emptyMgs");

function recupFavoris () {
    const data = localStorage.getItem("favorites");
    if (!data) return [];
    return JSON.parse(data);
}

const favoris = recupFavoris();

if (favoris.lenght === 0) {
    emptyMsg.style.display = "block";
}else {
    emptyMsg.style.display = "none";

    for (const url of favoris) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "image favorite";
        img.width = 200;

        favorisList.appendChild(img);
    }
}