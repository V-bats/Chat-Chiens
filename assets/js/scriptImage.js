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
