

function computerPlay(){
    let stringArray = ["Rock", "Paper", "Scissors"];
    let rndInt = Math.floor(Math.random() * 3) + 0;

    alert(stringArray[rndInt])
}

computerPlay()