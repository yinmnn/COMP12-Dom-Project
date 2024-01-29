// Display welcome alert when the page loads
window.onload = function () {
    alert("Welcome to the page of jumbled code");
};

// Add event listener to Example 12 button to display an alert on click
document.getElementById("example-12").addEventListener("click", function () {
    alert("The function finally worked");
});

// Set up multiple event listeners for Example 13 button to display different alerts
var example13Button = document.getElementById("example-13");

example13Button.addEventListener("click", function () {
    alert("Hello");
});

example13Button.addEventListener("click", function () {
    alert("Mr");
});

example13Button.addEventListener("click", function () {
    alert("Rai");
});

// Function to change color randomly
function changeColor() {
    var example5Box = document.getElementById("example-5");
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    example5Box.style.backgroundColor = randomColor;
}

// Function to change text on click
function changeText(element) {
    element.innerHTML = "Woah its different now";
}

// Function to change image on click
function changeImage(element) {
    element.src = "https://i.pinimg.com/236x/23/79/8d/23798d4ef0f4e5638c1e2ce0f0585d28.jpg";
}

// Function to call on button click
function callFunction() {
    alert("Bang a pop up");
}

// Function for onmouseover event
function mouseOverFunction(element) {
    element.innerHTML = "keep hovering it will happen eventually";
}

// Function for onmouseout event
function mouseOutFunction(element) {
    element.innerHTML = "Hover me for something super super cool";
}

// Function for onmousedown event
function mouseDownFunction(element) {
    element.innerHTML = "Keep holding on trust me";
}

// Function for onmouseup event
function mouseUpFunction(element) {
    element.innerHTML = "Click and hold for something cool to happen";
}
