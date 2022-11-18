// Write your JavaScript code here.
// Remember to pay attention to page loading!
// console.log(window)
//console.dir(document);

window.addEventListener("load", function() {
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML)+10000;
        }
    });
    let land = document.getElementById("landing");
    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = `The shuttle has landed.`;
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;

    });
    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function() {
       if (window.confirm("Confirm that you want to abort the mission")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
       }
    }); 
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");

    let shuttle = document.getElementById("rocket");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let altitude = 0;
    let left = 200;

    upButton.addEventListener("click", function() {
        altitude += 10;
        shuttle.style.bottom = `${altitude}px`;
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000 
    });
    downButton.addEventListener("click", function() {
        altitude -= 10;
        shuttle.style.bottom = `${altitude}px`;
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000 
    });
    leftButton.addEventListener("click", function() {
        left -= 10;
        shuttle.style.left = `${left}px`; 
    });
    rightButton.addEventListener("click", function() {
        left += 10;
        shuttle.style.left = `${left}px`;
    });
});