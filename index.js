
let isAlive = false
let hasBlackJack = false
let message = ""



let messageText = document.getElementById( "messageEl" )
//let sumText = document.getElementById("sumGame")
let sumText = document.querySelector( "#sumGame" )
let cards = document.querySelector( "#cards" )

function getRandomCard() {

    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    
    if ( randomNumber > 10 ) {
        return 10
    } else if ( randomNumber === 1 ) {
        return 11
    } else { return randomNumber }
    
   
}

function startGame() {
    let firstCard = getRandomCard();

    let secondCard = getRandomCard();

 drawnCards =[firstCard,secondCard ]

 sum = firstCard + secondCard 

    isAlive = true
    renderGame()


}

function renderGame() {
    
    if ( sum <= 20 ) {

          message = "Do You Want To Draw A New Card ?"
  

} else if ( sum === 21 ) {

    message = "You've Got Black Jack.You win !" 
        hasBlackJack = true
       
    
} else if ( sum > 21 ) {

        message = "You Loose"
        isAlive = false
          
}

    sumText.innerText = "Sum :" + sum
    
    cards.innerText = "Cards : "
    
    for ( let i = 0; i < drawnCards.length; i++ ){
          cards.textContent += drawnCards[i] + " "
    
}

    messageText.innerText=message

}

function newCards() {

    if ( isAlive === true && hasBlackJack === false) {

        let thirdCard = getRandomCard()


        drawnCards.push( thirdCard )
        sum += thirdCard
 
        sumText.innerText = "Sum :" + sum
    
        renderGame()
    }
    
}



