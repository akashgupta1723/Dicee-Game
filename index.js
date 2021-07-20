var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage1="images/dice"+randomNumber1+".png";
var randomimage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);
if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="🏆Player1 Win!";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player2 Win!🏆";
else
document.querySelector("h1").innerHTML="Draw!";
