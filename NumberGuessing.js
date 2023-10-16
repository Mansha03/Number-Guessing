const randomGuess = Math.floor((Math.random() * 1) + 1);

function GuessNo(){
    const GuessedNo=document.getElementById('click').value;
    if(randomGuess==GuessedNo){
        var au= new Audio('woo-hoo-82843.mp3');
        au.play();
        alert("You have Guessed it right!!!!!!!!")
    }
    else{
        alert("Sorry!!! Wrong Guess")
    }
}