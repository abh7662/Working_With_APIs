const URL = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
let deckId

function handleclick(){
  fetch(URL,{
    method: "GET"
  }).then(res => res.json())
  .then(data => {
    deckId = data.deck_id
    return data
  })
}

function handleGetNewCards(){
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
  .then(res => res.json())
  .then(data => {
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
document.getElementById("btn").addEventListener("click",handleclick)
document.getElementById("getNewCards").addEventListener("click",handleGetNewCards)

