const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    getResult();
}))


function generateComputerChoice() {
    // Get the int number that is in the range 0-2
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
    case 1:
        computerChoice = 'Pedra';
        break;

    case 2:
        computerChoice = 'Papel';
        break;
    
    case 3:
        computerChoice = 'Tesoura'; 
        break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    let lose = 'Perdeste :(';
    let win = 'Ganhaste :)';

    switch (computerChoice){
        case userChoice:
            result = 'Empate!!!';
            break;
        case 'Tesoura':
            if (userChoice == 'Pedra')
                result = win;
            if (userChoice == 'Papel')
                result = lose;
            break;
        case 'Pedra':
            if (userChoice == 'Tesoura')
                result = lose;
            if (userChoice == 'Papel')
                result = win;
            break;
        case 'Papel':
            if (userChoice == 'Pedra')
                result = lose;
            if (userChoice == 'Tesoura')
                result = win;
            break;
     }
     resultDisplay.innerHTML = result;
}