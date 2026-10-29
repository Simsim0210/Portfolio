// Display a welcome message in the browser console
console.log("Welcome to my developer portfolio!");

// Update the copyright year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Display a message when the visitor clicks the button
document.getElementById("messageButton").addEventListener("click", function () {
alert("Hello! Thank you for visiting my portfolio. Have a wonderful day!");
});