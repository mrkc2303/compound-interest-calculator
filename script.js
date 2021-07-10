var btn = document.getElementById("btn");
var body = document.querySelector("body");

function calculate(){
    var principal = 0;
    var interest = 0;
    var numberOfYear = 0;
    var numberOfTimesInYear = 0;
    var CI = 0;

    principal = parseInt(document.getElementById("principal").value);
    interest = parseInt(document.getElementById("annual-interest-rate").value);
    nyear = document.getElementById("number-of-year").value;
    ntime = document.getElementById("number-of-times-in-year").value;

    CI = (principal* Math.pow((1 + (interest/(ntime*100))), (ntime*nyear)));
    CI = CI.toFixed(2);

    document.getElementById("res").innerHTML = CI;
}

btn.addEventListener("click", calculate);
body.addEventListener("keypress", function check(event) {
    if(event.keyCode === 13){
        calculate();
    }
});