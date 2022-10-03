// Caught Speeding CYU Asgn

document.getElementById("btn").addEventListener("click", determineTicket);
let ticketOutput = document.getElementById("ticket-out");

function determineTicket() {
let driverSpeed = document.getElementById("d-speed").value;
let limitSpeed = document.getElementById("l-speed").value;
let speedDifference = (driverSpeed - limitSpeed)
if (speedDifference >= 20) {
    ticketOutput.innerHTML = "Big Ticket";
} else if (speedDifference <= 20 && speedDifference >= 1) {
    ticketOutput.innerHTML = "Small Ticket";
} else {
    ticketOutput.innerHTML = "No Ticket";
}
}