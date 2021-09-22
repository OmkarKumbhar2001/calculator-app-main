// theme
$("#theme").click(function(){
    document.getElementById("theme").classList.add("circle");
    document.getElementById("theme_1").classList.remove("circle_1");
    document.getElementById("theme_2").classList.remove("circle_2");
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    document.querySelector("b").style.color = "#fff";
    $(".theme-ii").css("color","#fff");
    document.querySelector(".theme-name").style.color = "#fff";
    document.querySelector(".dot").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".screen").style.backgroundColor = "hsl(224, 36%, 15%)";
    document.querySelector(".keypad").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.querySelector(".current-operands-screen").style.color = "#fff";
    document.querySelector(".previous-opred-screen").style.color = "#fff";
    $(".numbers,.operands").css("backgroundColor","hsl(30, 25%, 89%)");
    $(".numbers,.operands").css("color","hsl(224, 28%, 35%)");
    $(".numbers,.operands").css("borderBottom","3px solid hsl(224, 28%, 35%");
    $(".DEL,.Reset").css("backgroundColor","hsl(225, 21%, 49%)");
    $(".DEL,.Reset").css("color","#fff");
    $(".DEL,.Reset").css("borderBottom","3px solid hsl(28, 16%, 65%))");
    $(".equal_button").css("backgroundColor","hsl(6, 63%, 50%)");
    $(".equal_button").css("color","#fff");
    $(".equal_button").css("borderBottom","3px solid hsl(6, 70%, 34%)");
});


// theme1
$("#theme_1").click(function(){
    document.getElementById("theme").classList.remove("circle");
    document.getElementById("theme_1").classList.add("circle_1");
    document.getElementById("theme_2").classList.remove("circle_2");
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.querySelector("b").style.color = "hsl(60, 10%, 19%)";
    $(".theme-ii").css("color","hsl(60, 10%, 19%)");
    document.querySelector(".theme-name").style.color = "hsl(60, 10%, 19%)";
    document.querySelector(".dot").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.querySelector(".screen").style.backgroundColor = "hsl(0, 0%, 93%)";
    document.querySelector(".keypad").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.querySelector(".current-operands-screen").style.color = "hsl(60, 19%, 62%)";
    document.querySelector(".previous-opred-screen").style.color = "hsl(60, 19%, 62%)";
    $(".numbers,.operands").css("backgroundColor","hsl(45, 7%, 89%)");
    $(".numbers,.operands").css("color","hsl(60, 10%, 19%)");
    $(".numbers,.operands").css("borderBottom","3px solid hsl(25, 99%, 27%)");
    $(".DEL,.Reset").css("backgroundColor","hsl(185, 42%, 37%)");
    $(".DEL,.Reset").css("color","#fff");
    $(".DEL,.Reset").css("borderBottom","3px solid hsl(185, 58%, 25%)");
    $(".equal_button").css("backgroundColor","hsl(25, 98%, 40%)");
    $(".equal_button").css("color","#fff");
    $(".equal_button").css("borderBottom","3px solid hsl(25, 99%, 27%)");
});
// theme2
$("#theme_2").click(function(){
    document.getElementById("theme").classList.remove("circle");
    document.getElementById("theme_1").classList.remove("circle_1");
    document.getElementById("theme_2").classList.add("circle_2");
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)"; 
    document.querySelector("b").style.color = "hsl(52, 100%, 62%)";
    $(".theme-ii").css("color","hsl(52, 100%, 62%)");
    document.querySelector(".theme-name").style.color = "hsl(52, 100%, 62%)";
    document.querySelector(".dot").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".screen").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".keypad").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".previous-opred-screen").style.color = "yellow";
    document.querySelector(".current-operands-screen").style.color = "yellow";
    $(".numbers,.operands").css("backgroundColor","hsl(268, 47%, 21%)");
    $(".numbers,.operands").css("color","hsl(52, 100%, 62%)");
    $(".numbers,.operands").css("borderBottom","3px solid hsl(290, 70%, 36%)");
    $(".DEL,.Reset").css("backgroundColor","hsl(281, 89%, 26%)");
    $(".DEL,.Reset").css("color","#fff");
    $(".DEL,.Reset").css("borderBottom","3px solid hsl(285, 91%, 52%)");
    $(".equal_button").css("backgroundColor","hsl(176, 100%, 44%)");
    $(".equal_button").css("color","#fff");
    $(".equal_button").css("borderBottom","3px solid hsl(177, 92%, 70%)");

});



// All Calculation_________________________
let currentOperand = document.querySelector(".current-operands-screen");
let prevOperand = document.querySelector(".previous-opred-screen");
let equalbutton = document.querySelector(".equal_button");
let operands = document.querySelector(".operands")
let pre = parseInt(prevOperand.innerText);
let curr = parseInt(currentOperand.innerText);
$(".numbers").click(function () {
    var omkar = this.innerText;
    if (currentOperand.innerText == "0") {
        currentOperand.innerText = "";
    }
    currentOperand.innerText += omkar;
    
});
$(".operands").click(function () {
    var calculation = this.innerText;
    if (calculation === "+") {
        addcalculation();
    }
    if (calculation === "-") {
        subcalculation();
    }
    if (calculation === "*") {
        mulcalculation();
    }
    if (calculation === "/") {
        divcalculation();
    }
})
function addcalculation() {
    prevOperand.innerText += "+" + currentOperand.innerText;
    currentOperand.innerText = "0";

}
function subcalculation() {
    prevOperand.innerText += "-" + currentOperand.innerText;
    currentOperand.innerText = "0";
}
function mulcalculation() {

    prevOperand.innerText += "*" + currentOperand.innerText;
    currentOperand.innerText = "0";
}
function divcalculation() {
    prevOperand.innerText += "/" + currentOperand.innerText;
    currentOperand.innerText = "0";
    
}
$(".equal_button").click(function () {
    var pre = prevOperand.innerText;
    pre=prevOperand.innerText.slice(1,prevOperand.length);
    var curr =currentOperand.innerText;
    var opr=prevOperand.innerText.slice(prevOperand.length,1);
    
    if(opr==="+"){
        currentOperand.innerText=parseFloat(pre)+parseFloat(curr);
    }
    if(opr==="-"){

        currentOperand.innerText=pre-curr;
    }
    if(opr==="*"){
        currentOperand.innerText=pre*curr;
    }
    if(opr==="/"){
        currentOperand.innerText=pre/curr;
    }
    prevOperand.innerText="";
});
// Reset Button
$(".Reset").click(function(){
    prevOperand.innerText="";
    currentOperand.innerText="0";
});
// Del button
$(".DEL").click(function(){
    prevOperand.innerText=prevOperand.innerText.slice(0,-1);
    currentOperand.innerText=currentOperand.innerText.slice(0,-1);
});