const colors = ["lightblue", "lightgreen", "lightgray", "pink", "orange"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // get random number between 0-4
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function to randomly generate a number between 0-4 to match the colors array.lenght
// and round to the nearest int using Math.floor
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}