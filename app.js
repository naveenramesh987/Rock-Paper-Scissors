const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button');
let userChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDispaly.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNum = (Math.random() * 3) + 1

    if (randomNum == 1) {
        computerChoice = 'rock'
    }
    if (randomNum == 2) {
        computerChoice = 'paper'
    }
    if (randomNum == 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice == userChoice) {
        result = 'Draw'
    }
    if (computerChoice == 'rock' && userChoice == 'paper') {
        result = 'You win'
    }
    if (computerChoice == 'rock' && userChoice == 'scissors') {
        result = 'You lose' 
    }
    if (computerChoice == 'paper' && userChoice == 'scissors') {
        result = 'You lose' 
    }
    if (computerChoice == 'paper' && userChoice == 'rock') {
        result = 'You lose' 
    }
    if (computerChoice == 'scissors' && userChoice == 'rock') {
        result = 'You lose' 
    }
    if (computerChoice == 'scissors' && userChoice == 'paper') {
        result = 'You lose' 
    }
    resultDisplay.innerHTML = result
}