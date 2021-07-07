

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
       return 1
   }else if(string.includes("lose")){
       return 2
   }else{
       return 0
   }
}

function game(){
    debugger
    
    let index = 0;
    let winner = 0;
    let compWins = 0;
    let humanWins = 0;
    
    while(index < 2){
        const computerSelection = computerPlay();
        const playerSelection = window.prompt("What will you play? rock scissors or paper?")
        let string = "";
        


        string = playRound(playerSelection, computerSelection)
        winner = roundWinner(string)
        alert(string)
        if(winner === 1){
            humanWins++
        }else if(winner === 2){
            compWins++
        }
        index++
        
            
    }
    
    if (compWins > humanWins) {
        alert("at the end you lose to computer")
    }else if (humanWins > compWins){
        alert("at the end you win")
    }else{
        alert("at the end its draw")
    }
        
    
        
}
    


game()