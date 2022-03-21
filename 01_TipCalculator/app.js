// Calculate Tip Function
function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var peopleAmount = document.getElementById("peopleAmount").value;

    // input validation
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter bill amount and service quality.");
        return;
    }

    // check if input value it empty or less than or equal to 1
    if (peopleAmount === "" || peopleAmount <= 1 ) {
        peopleAmount = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // calculate tip
    var total = (billAmount * serviceQuality) / peopleAmount;

    // round to two decimal places
    total = Math.round(total * 100) / 100;

    // allow two digits after decimal point
    total = total.toFixed(2);

    // display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// click to call the function
document.getElementById("calculate").onclick = function() {
    calculateTip();
}
