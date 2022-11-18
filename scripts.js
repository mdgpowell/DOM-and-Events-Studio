// Write your JavaScript code here.
// Remember to pay attention to page loading!
// console.log(window)
console.dir(document);

window.addEventListener("load", function() {
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function() {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
    });
});