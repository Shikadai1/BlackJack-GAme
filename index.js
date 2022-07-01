//let firstCard = getRandomCard()
//let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
     name: "SMD",
     chips: 200
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard(){
    let randomNumber = Math.floor(Math.random() *12) +1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.textContent= "Cards: " 
    //cardsEl.textContent= "Cards: " + cards[0] + " " + cards[1]
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! you have got a blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    //console.log("Drawing a new card from the deck!")
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    
}

// let rounds = [1,2,3,4,5,6,7,8,0,10]
// for (i = 0; i < rounds.length; i++){
//     console.log(rounds[i])
// }
// dies range
//let randomNumber = Math.floor(Math.random() * 6) +1
// Math,random() gives range of 0 to 1 without 1 inclusive
//console.log(randomNumber)

// let flooredNumber = Math.floor (3.5632)

// console.log(flooredNumber)



// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true){
//     generateCertificate()
// }
// function  generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasCompletedCourse = true
// let givesCertificate = false

// if (hasCompletedCourse === true || givesCertificate === true){
//     generateCertificate()
// }
// function  generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hands = ["rock", "scissors", "paper"]
// function getHand(){
//     let randomIndex = Math.floor(Math.random() *3)
//     return hands[randomIndex]
// }
// console.log(getHand())


//sorting out
let fruit = ["apple", "apple", "pear", "apple", "pear"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple"){
            appleShelf.textContent += "apple "
        } else if (fruit[i] === "pear") {
            orangeShelf.textContent += "pear "
        }
    }
}
sortFruit()