let photos = [
    "kpop1.jpg",
    "kpop2.jpg",
    "kpop.jpg3.jpeg",
    "neruhapic1.jpg"
];

function changePhoto() {
    let random = Math.floor(Math.random() * photos.length);
    document.getElementById("mainPhoto").src = photos[random];
}
