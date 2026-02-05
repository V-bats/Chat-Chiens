const images = document.getElementById("imgFavoris");
const emptyMsg = document.getElementById("emptyMgs");
const changeLeft = document.getElementById('left')
const changeRight = document.getElementById('right')
let index = 0
const favoris = recupFavoris();

function recupFavoris() {
    const data = localStorage.getItem("favoris");
    console.log(data);
    
    if (!data) return [];
    return JSON.parse(data);
}

function afficherImage() {
if (favoris.length === 0) {
    emptyMsg.style.display = "block";
    images.style.display = "none";
}else {
    emptyMsg.style.display = "none";
    images.style.display = "block";

images.src = favoris[index]

}}

afficherImage();

changeRight.addEventListener('click', () => {
   index++
    if (index > favoris.length-1) {
        index = 0
        console.log(index)
    } else {
        images.src = ''
        console.log(index)
        afficherImage()
    }
})

changeLeft.addEventListener('click', () => {
    index--
    if (index < 0) {
        index = favoris.length-1
        console.log(index)
    } else {
        images.src = ''
        console.log(index)
        afficherImage()
    }
  
})

console.log(favoris.length);
console.log(index);