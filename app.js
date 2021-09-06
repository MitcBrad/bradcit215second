
var MPYprompter = prompt("How many miles per year do you drive?");
var CPGprompter = prompt("What's the current cost of gas? (Per gallon)");
let mpg1 = 12;
let mpg2 = 17;
let mpg3 = 26;
let mpg4 = 29;
// let mileages = [12,17,26,29];
let end=0;


let arrayticker = 0;
let costperyear = 0.00;
let button = document.getElementById("NextGas");
let reload = document.getElementById("reload");
reload.addEventListener("click", refreshPage);
button.addEventListener("click", testPrint);
let mpy = MPYprompter;
let cpg = CPGprompter;


function testPrint(){
    if (end == 0){
        costperyear = (mpy/mpg1)*cpg
        document.body.querySelector(".test1").innerHTML ="\n" + "To drive a car with a MPG rating of " + mpg1 + " for " + mpy + " miles at $" + cpg + " per gallon it would cost $" + costperyear.toFixed(2);
        end = end + 1
    }
    else if (end == 1){
        costperyear = (mpy/mpg2)*cpg
        document.body.querySelector(".test2").innerHTML ="\n" + "To drive a car with a MPG rating of " + mpg2 + " for " + mpy + " miles at $" + cpg + " per gallon it would cost $" + costperyear.toFixed(2);
        end = end + 1
    }
    else if (end == 2){
        costperyear = (mpy/mpg3)*cpg
        document.body.querySelector(".test3").innerHTML ="\n" + "To drive a car with a MPG rating of " + mpg3 + " for " + mpy + " miles at $" + cpg + " per gallon it would cost $" + costperyear.toFixed(2);
        end = end + 1
    }
    else{
        costperyear = (mpy/mpg4)*cpg
        document.body.querySelector(".test4").innerHTML ="\n" + "To drive a car with a MPG rating of " + mpg4 + " for " + mpy + " miles at $" + cpg + " per gallon it would cost $" + costperyear.toFixed(2);
        end = 0
    }

}
function refreshPage(){
    window.location.reload();
}