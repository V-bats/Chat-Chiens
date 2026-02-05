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