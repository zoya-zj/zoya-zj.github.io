let div = document.getElementById("div-id");
let button_img = document.getElementById("button-img-id");

function changeColor() {
    if (div.style.backgroundColor === "black"){
        div.style.backgroundColor = "#f6bacb"
        div.style.border = "#f6bacb"
        button_img.src = "img/light.png"
    }
    else {
        div.style.backgroundColor = "black"
        div.style.border = "black"
        button_img.src = "img/dark.png"
    }
}