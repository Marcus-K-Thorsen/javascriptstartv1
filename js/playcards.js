function playerPullCard() {
    const playerCard = document.createElement('img')
    playerCard.src = "https://deckofcardsapi.com/static/img/6H.png"
    playerCard.className = "player-card"
    playerCard.alt = "6 of Harts"
    const removePlayerCardEvent = removeCard(playerHand, playerCard)
    playerCard.addEventListener('click', removePlayerCardEvent)
    playerHand.appendChild(playerCard)
    console.log(playerHand)
}

function removeCard(hand, card) {
    return function () {
        hand.removeChild(card)
    }
}




const playerHand = document.getElementById("player-hand")
const pbPullCard = document.querySelector(".pb-get-card")
pbPullCard.addEventListener('click', playerPullCard)