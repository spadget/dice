function diceRoll (){

//set two random numbers for the two dice

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

//set the die images to correspond with the random numbers "rolled"

document.querySelector("img.img1").setAttribute("src", "images/die" + randomNumber1 + ".png");

document.querySelector("img.img2").setAttribute("src", "images/die" + randomNumber2 + ".png");

//change text in h1 to reflect outcome

if(randomNumber1 === 1 && randomNumber2 === 1) {
    document.querySelector("h1").innerHTML = "BOOBIES!";
    document.querySelector("p.player1").style.textDecoration = "none";
    document.querySelector("p.player2").style.textDecoration = "none";
} else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player  1  Wins!";
    document.querySelector("p.player1").style.textDecoration = "underline";
    document.querySelector("p.player2").style.textDecoration = "none";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player  2  Wins!";
    document.querySelector("p.player1").style.textDecoration = "none";
    document.querySelector("p.player2").style.textDecoration = "underline";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("p.player1").style.textDecoration = "none";
    document.querySelector("p.player2").style.textDecoration = "none";
}

}