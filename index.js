// define global variables
var timer = null; 
var h = 0;
var m = 0;
var s = 0;

window.onload = function(){

    // disable initial buttons
    document.getElementById("btn-pause").disabled = true;
    document.getElementById("btn-stop").disabled = true;
};

function rickRolled() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

}

function startCounting() {

    // get the values from the front
    h = +document.getElementById("input-h").value || h;
    m = +document.getElementById("input-m").value || m;
    s = +document.getElementById("input-s").value || s;

    // check for illegal input
    // if the values all are = 0 or < 0 show message
    if( 
        (h == 0 && m == 0 && s == 0) || 
        (h < 0 || m < 0 || s < 0)
    ){
        alert("Hey, you can't do that!");
        return;
    }
}