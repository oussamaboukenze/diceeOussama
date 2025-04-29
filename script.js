var number=Math.random();
number=number*6;
number=Math.floor(number)+1;

var number2=Math.random();
number2=number2*6;
number2=Math.floor(number2)+1;

document.getElementsByClassName("img1")[0].src="./images/dice"+number+".png";
document.getElementsByClassName("img2")[0].src="./images/dice"+number2+".png";

if(number > number2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(number2 > number){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
