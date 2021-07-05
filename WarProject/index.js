const URL = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
let deckId
const remainingCards = document.getElementById("remainingCards")
const shuffleNewCards = document.getElementById("btn")
const drawNewCards = document.getElementById("getNewCards")
let computer_hand = 0
let my_hand = 0
drawNewCards.disabled = true
function handleclick(){
  computer_hand = 0
  my_hand = 0
  fetch(URL,{
    method: "GET"
  }).then(res => res.json())
  .then(data => {
    remainingCards.textContent = `Remaining Card: ${data.remaining}`
    deckId = data.deck_id
    if(deckId){
      drawNewCards.disabled = false
    }
    return data
  })
}

function handleGetNewCards(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
      if(data.remaining === 0){
        drawNewCards.disabled = true
      }
      remainingCards.textContent = `Remaining Card: ${data.remaining}`
      const displayWinner = document.getElementById("displayWinner")
      displayWinner.textContent = checkWinner(data.cards[0],data.cards[1])
      document.getElementById("palyer1").textContent = `Computr Score: ${computer_hand}`
      document.getElementById("palyer2").textContent = `My Score: ${my_hand}`
      if(data.remaining === 0){
        computer_hand > my_hand? displayWinner.textContent = "Final Winner: Computer" : displayWinner.textContent = "Final Winner: ME"
      }
      const cardSlots = document.querySelectorAll(".card-slots")
      let cardSlot = Array.from(cardSlots)

      cardSlot[0].innerHTML = `
        <img src=${data.cards[0].images.png} alt="">
      `
      cardSlot[1].innerHTML = `
        <img src=${data.cards[1].images.png} alt="">
      `
    })
    
}
shuffleNewCards.addEventListener("click",handleclick)
drawNewCards.addEventListener("click",handleGetNewCards)

function getScoreOfCard(card){
  const allCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
  return allCards.findIndex(element => element === card) + 2
}
function checkWinner(card1,card2){
  const score1 = getScoreOfCard(card1.value)
  const score2 = getScoreOfCard(card2.value)
  if(score1 > score2){
    computer_hand++
    return "Computer wins!"
  }else if(score1 < score2){
    my_hand++
    return "You win!"
  }
  else{
    return "War!"
  }
}

