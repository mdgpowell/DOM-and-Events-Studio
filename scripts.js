// Write your JavaScript code here.
// Remember to pay attention to page loading!
// console.log(window)
console.dir(document);

window.addEventListener("load", function() {
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML)+10000;
            
        }
    });
});