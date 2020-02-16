document.getElementsByTagName("a")[0].setAttribute('title', "github");

let list = document.getElementsByTagName("ul")[0];
list.getElementsByTagName("li")[1].setAttribute("class", "strengths");

document.getElementById("text-modify").innerHTML = "Check out this cat picture!"

let image = document.getElementById("catImage")
let hideButton = document.getElementById("hideImage")

function hideImage() {
    if (image.style.display === "none") {
        image.style.display = "block";
        hideButton.innerHTML = "Hide Image"
    }else {
        image.style.display = "none";
        hideButton.innerHTML = "Show Image"
    }
} 
function thankMessage() {
    alert("Thank you for viewing my resume!")
}

console.log("This outputs into the console.");

