const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

const div = document.querySelector('#section');

let index = 0;
let score = "";
let playerWon = 0;
let computerWon = 0;

rockBtn.style = 'width: 130px; height: 130px; background-image:url(./images/rock.png)'
paperBtn.style = 'width: 130px; height: 130px; background-image:url(./images/paper.png)'
scissorsBtn.style = 'width: 130px; height: 130px; background-image:url(./images/scissors.png)'

rockBtn.value = 'rock';
paperBtn.value = 'paper';
scissorsBtn.value = 'scissors';

div.appendChild(rockBtn);
div.appendChild(paperBtn);
div.appendChild(scissorsBtn);

rockBtn.addEventListener('click', function (e) {
    debugger;
    // string = playRound(e.target.value, computerSelection);
    // console.log(string);
    const computerSelection = computerPlay();
    const playerSelection = e.target.value;
    console.log(playerSelection);

    let resultString = playRound(playerSelection, computerSelection);

    game(resultString);
})

paperBtn.addEventListener('click', function (e) {
    // string = playRound(e.target.value, computerSelection);
    // console.log(string);
    const computerSelection = computerPlay();
    const playerSelection = e.target.value;
    console.log(playerSelection);

    let resultString = playRound(playerSelection, computerSelection);

    game(resultString);
})

scissorsBtn.addEventListener('click', function (e) {
    // string = playRound(e.target.value, computerSelection);
    // console.log(string);
    const computerSelection = computerPlay();
    const playerSelection = e.target.value;
    console.log(playerSelection);

    let resultString = playRound(playerSelection, computerSelection);

    game(resultString);
})

function computerPlay(){
    let stringArray = ["Rock", "Paper", "Scissors"];
    //0 ile 2 arasinda random sayi aliyoruz
    let rndInt = Math.floor(Math.random() * 3) + 0;

    return stringArray[rndInt];
}

function playRound(playerSelection, computerSelection){
    let playerToLower = playerSelection.toLowerCase();
    let computerToLower = computerSelection.toLowerCase();
    let strResult = "";
     

    if(playerToLower === 'rock'){
        if(computerToLower === 'rock'){
            strResult = `Tie! you played ${playerToLower} and computer also played ${computerToLower}`
        }else if(computerToLower === 'paper'){
            strResult = `You lose! you played ${playerToLower} and beaten by computers ${computerToLower}`
        }else{
            strResult = `You win! you played ${playerToLower} and it beats computers ${computerToLower}`
        }

    }
    if(playerToLower === 'paper'){
        if (computerToLower === 'rock') {
            strResult = `You win! you played ${playerToLower} and beat computers ${computerToLower}`
        } else if (computerToLower === 'paper') {
            strResult = `Tie! you played ${playerToLower} and computer also played ${computerToLower}`
        } else {
            strResult = `You lose! you played ${playerToLower} and it beaten by computers ${computerToLower}`
        }
    }

    if (playerToLower === 'scissors') {
        if (computerToLower === 'rock') {
            strResult = `You lose! you played ${playerToLower} and it beaten by computers ${computerToLower}`
        } else if (computerToLower === 'paper') {
            strResult = `You win! you played ${playerToLower} and beat computers ${computerToLower}`
        } else {
            strResult = `Tie! you played ${playerToLower} and computer also played ${computerToLower}`
        }
    }


    return strResult
    

    
}

function roundWinner(string){
   if (string.includes("win")) {
       playerWon++;
   }else if(string.includes("lose")){
       computerWon++
   }else{
       return 0;
   }
}

function game(result){



    if (index < 5) {
        debugger;
        if (document.getElementById('result')) {
            let element = document.getElementById('result');
            div.removeChild(element);
        }


        const resultDiv = document.createElement('div');
        resultDiv.setAttribute("id", "result");

        resultDiv.innerText = result;


        div.appendChild(resultDiv);
        roundWinner(result);
        index++;

    }else{
        let winner = document.createElement('p');
        if (playerWon > computerWon) {
            winner.innerText = "You Won!!! Congrats";
        }else if(computerWon > playerWon){
            winner.innerText = "Computer won!!! you loooser!!!!"
        }else{
            winner.innerText = "tie!!";
        }
        div.appendChild(winner);
    
    }
    
    

}
    


