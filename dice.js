// for dice 1

// var randomNumber1=Math.floor(Math.random()*6)+1;//random number 1-6
var randomNumber1=parseInt(prompt("enter a number between 1 to 6"));
var randomDiceImage1="dice"+randomNumber1+".png";//dice1.png-dice6.png
var randomImageSource1="images/"+randomDiceImage1;//images/dice1.png-images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

// for dicee2

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


// winner
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩you won!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩computer won!";

}
else{
    document.querySelector("h1").innerHTML="🚩draw!";
}
