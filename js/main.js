var css = document.querySelector("h3");
var colorOne = document.querySelector(".colorone");
var colorTwo = document.querySelector(".colortwo");
var body = document.getElementById("gradient");

function changeBackground(){
    body.style.background = " linear-gradient(to right,"
     +colorOne.value 
     +", " 
     +colorTwo.value
     ")";

     css.textContent = body.style.background + ";";

}
colorOne.addEventListener("input", changeBackground);/*مش هستدعى الفانكش عشان دا input */

colorTwo.addEventListener("input", changeBackground);