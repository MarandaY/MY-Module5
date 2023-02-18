//For loop
const names = ["Stan", "Kyle", "Eric", "Kenny"];

let text = "";
for (let x of names) {
    text += x + "<br>";
}

document.getElementById("list").innerHTML = text;


//While loop
let words = "";
let n = 1;
do {
    words += n + " of them! ";
    n++;
}
while (n < 5);

document.getElementById("words").innerHTML = words;


// description of the button grabbed.
let description = ("Finally, press the button to toggle between the unfinished and finished drawing.")
document.getElementById("desc").innerHTML = description;


//CSS change to the button with JS
let format = document.querySelector("#change");
format.style.fontFamily = "Verdana";
format.style.color = "White";
format.style.backgroundColor = "magenta";
format.style.border = "none";
format.style.padding = "5px";

//CSS of the title changed when clicked (based on the variable).
const title = document.querySelector(".title");

title.addEventListener("click", function() {
    title.classList.toggle("titleChange");
});


//button toggle JS (just for practice)
document.getElementById("change").addEventListener("click", imgChange);

function imgChange(){
    let img = document.getElementById("picture").src;
    if (img.indexOf("images/wip.png")!=-1) {
        document.getElementById("picture").src = "./images/finished.png";
    }
    else {
        document.getElementById("picture").src = "./images/wip.png";
    }

}