// set initial count
let count = 0;

// select all buttons with a class of btn and the value
const buttons = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

// add click event for each button
buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
        const classes = e.currentTarget.classList;
        if (classes.contains("decrease")) {
            // decrease count
            count--;
        } else if (classes.contains('increase')) {
            // increase count
            count++;
        } else {
            // set count to 0
            count = 0;
        }

        // set different color styles based on the - or +
        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";
        if (count === 0) value.style.color = "#222";

        // assign/set count to the value
        value.textContent = count;
    })
})