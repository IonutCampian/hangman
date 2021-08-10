document.getElementById("letter").style.visibility = 'hidden';
document.getElementById("check").style.visibility = 'hidden';
var lives = 5;
document.getElementById("livesToGo").style.visibility = 'hidden';
document.getElementById("thisAreYourLives").style.visibility = 'hidden';
function startTheGame() {
    document.getElementById("start").style.visibility='hidden';
    document.getElementById("word").style.visibility='hidden';
    document.getElementById("letter").style.visibility = 'visible';
    document.getElementById("check").style.visibility = 'visible';
    document.getElementById("livesToGo").style.visibility = 'visible';
    document.getElementById("thisAreYourLives").style.visibility = 'visible';
    var wordAsButtton = document.getElementById("word").value;
    var lettersOfTheWord = wordAsButtton.split('');
    for(var i = 0; i < lettersOfTheWord.length; ++i) {
        var buttonAsAnswer = document.createElement("BUTTON");
        buttonAsAnswer.setAttribute("id", i);
        buttonAsAnswer.innerText = lettersOfTheWord[i];
        document.body.appendChild(buttonAsAnswer);
        buttonAsAnswer.style.visibility = "hidden";
    }
 }

function tryLetter(){
    var guess = document.getElementById("word").value;
    const guessToArray = guess.split('');
    var correctLetters = [' '];
    var letterToTest = document.getElementById("letter").value;
    if(guess.indexOf(letterToTest) < 0) {
        --lives;
        document.getElementById("livesToGo").innerText = lives;
    }
    if(lives == 0) {
        document.write("YOU LOSE");
    }
    for(var i = 0; i < guessToArray.length; ++i) {
        if(guessToArray[i] == letterToTest) {
            correctLetters[i] = letterToTest;
            document.getElementById(i).style.visibility = "visible";
        }
    }
}