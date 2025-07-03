// STEP -1: GET ALL THE REQUIRED NODES FROM HTML
const againButton = document.querySelector(".again-button");
const num = document.querySelector(".question-mark");
const guess = document.querySelector(".input-box");
const checkBtn = document.querySelector(".check-button");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

// STEP -2: GENERATE A RANDOM NUMBER
let random = Math.trunc(Math.random()*20) + 1;
let scores = 20;
console.log(random);

// STEP -3: CHECK BUTTON FUNCTIONALITY
const checkFun  = () => {
    const guessed = Number(guess.value);
    console.log(guessed);

    // STEP -3.1: CHECK USER HAS ENTERED A NUMBER OR NOT
    if (!guessed) {
    message.textContent = "Please enter a number";
    } 
    
    // STEP -3.2: CHECK THE VALUE IS EQUAL OR NOT
    else if (guessed === random) {
        console.log("YOU WON!!")
        message.textContent = "YOU WON!!!";
        // highscore.textContent = scores;
        document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".input-box").style.backgroundColor="green";
        num.textContent = random;
    }
    
    // STEP -3.3: CHECK THE VALUE IS LESS
    else if (guessed < random) {
        scores-=1;
        score.textContent = scores;
        message.textContent = "Too low";
    } 

    // STEP -3.4: CHECK THE VALUE IS HIGH
    else if (guessed > random) {
        scores-=1;
        score.textContent = scores;
        message.textContent = "Too high";
    }
}

checkBtn.addEventListener("click", checkFun);


// STEP -4: AGAIN BUTTON FUNCTIONALITY

const againFunc = () => {
    document.querySelector("body").style.backgroundColor = "black";
    random = Math.trunc(Math.random()*20) + 1;
    score.textContent= 20;
    scores=20;
    num.textContent="?";
    message.textContent = "Start Guessing...";
    guess.textContent="";
    console.log("Guess.value:" , guess.value);
    guess.value="";
    document.querySelector(".input-box").style.backgroundColor="black";
    console.log(random);
    if(scores>highscore){
        highscore.textContent=scores;
    }
}

againButton.addEventListener("click", againFunc);