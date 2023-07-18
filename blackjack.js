let player ={
    name: "Sharad",
    chips: 150,
    sayHello: function()
    {
        console.log("hii SS")
    }
}

let cards=[]
let sum=0
let hashBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
// object in javascript

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": Rs-" + player.chips
function getRandomCard()
{
    let randomNumber= Math.floor(Math.random()*13)+1  // math.random()=> 0.00 t 0.99999...
    if(randomNumber===1)
    {
        return 11
    }
    if(randomNumber>=11&&randomNumber<=13)
    {
        return 10
    }
    else{
        return randomNumber
    }
} 
function startGame()
{
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
}
function renderGame()
{
    cardsEl.textContent ="Cards:"
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent +=" "+cards[i]
    }
    // + cards[0] + " " + cards[1]
    //console.log(cardsEl.textContent)
    sumEl.textContent="Sum: "+sum
    if(sum<=20)
    {
        message="do you want draw a new card?"
    }
    else if(sum===21)
    {
        message="Wohho You've got BlackJack"
        hashBlackJack=true
    }
    else
    {
        message="you're out of the game"
        isAlive=false
    }
    messageEl.textContent=message
}
function newCard()
{
    if(isAlive&&!hashBlackJack)
    {
        let thirdcard=getRandomCard()
        sum+=thirdcard
        cards.push(thirdcard)
        //console.log(cards)
        renderGame()
    }
}