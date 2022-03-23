const hexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hex = "#";
    // loop 6 times because hex number consists of 6 hex code/numbers
    for (let i = 0; i < 6; i++ ) {
        hex += hexColors[getRandomNumber()];
    }

    // set the text and the background color to randomly generated hex code/numbers
    color.textContent = hex;
    document.body.style.backgroundColor = hex;
})

// function to randomly generate a number to match the colors array.lenght
// and round to the nearest int using Math.floor
function getRandomNumber() {
    return Math.floor(Math.random() * hexColors.length);
}