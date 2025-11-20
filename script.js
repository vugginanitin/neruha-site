function showMessage() {
    document.getElementById("message").innerHTML =
        "💗 Dear Neruha, you're special, amazing and this is your mini website surprise! 💗";
}

function randomKpop() {
    const pics = [
        "https://i.imgur.com/VHDy8Xy.jpeg",
        "https://i.imgur.com/XH6pfaP.jpeg",
        "https://i.imgur.com/uzFztX4.jpeg",
        "https://i.imgur.com/tGUXw4l.jpeg"
    ];

    const img = document.getElementById("random-img");
    img.src = pics[Math.floor(Math.random() * pics.length)];
}