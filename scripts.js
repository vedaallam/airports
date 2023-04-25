console.log("here!");

// 1) get the reference of what you want to change
let navImages = document.querySelectorAll(".cloud");
let mainImage = document.querySelector(".airplane");

// 2) define the changes you want to make
function greenCloud(){
    mainImage.src = "images/clouds-green.jpg";
}

function blueCloud(){
    mainImage.src = "images/clouds-blue.jpg";
}

function redCloud(){
    mainImage.src = "images/clouds-red.jpg";
}
function goBack(){
    mainImage.src = "images/airplane.jpg";
}

// 3) call your function on a specific event
navImages[0].onclick = blueCloud;
navImages[1].onclick = greenCloud;
navImages[2].onclick = redCloud;
mainImage.onclick = goBack;
