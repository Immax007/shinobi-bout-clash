// ======================================
// SHINOBI CLASH
// CORE INTERFACE CONTROLLER
// ======================================


console.log("🔥 Shinobi Clash Interface Loaded");





// ===============================
// RESET BUTTON
// ===============================


const resetButton =
document.querySelector(".reset-btn");


resetButton.addEventListener(
"click",
()=>{

location.reload();

});








// ===============================
// CARD SELECT SYSTEM
// ===============================


const cards =
document.querySelectorAll(".hand-card");


let selectedCard = null;



cards.forEach(card=>{


card.addEventListener(
"click",
()=>{


cards.forEach(c=>{

c.style.transform="";

c.style.filter="";

});



card.style.transform=
"translateY(-25px) scale(1.1)";


card.style.filter=
"drop-shadow(0 0 20px cyan)";



selectedCard=card;



console.log(
"Card Selected"
);



});


});







// ===============================
// PLAY CARD
// ===============================


const playButton =
document.querySelector(".play-btn");



playButton.addEventListener(
"click",
()=>{


if(!selectedCard){

alert(
"Select a card first"
);

return;

}



selectedCard.style.transform=
"translateY(-200px) scale(1.2)";



selectedCard.style.transition=
".5s";



setTimeout(()=>{


selectedCard.style.transform="";


selectedCard.style.filter="";

selectedCard=null;


},700);



console.log(
"Card Played"
);



});









// ===============================
// DRAW CARD
// ===============================


const drawButton =
document.querySelector(
".action-area button:first-child"
);



let cardsLeft = 12;



drawButton.addEventListener(
"click",
()=>{


if(cardsLeft<=0){

return;

}



cardsLeft--;



const amount =
document.querySelector(
".deck strong"
);


amount.textContent =
cardsLeft;



console.log(
"Drawing Card"
);



});








// ===============================
// JUTSU EFFECT
// ===============================


const jutsuButton =
document.querySelector(
".action-area button:nth-child(3)"
);



jutsuButton.addEventListener(
"click",
()=>{


document.querySelector(
".game-screen"
)
.style.filter=
"brightness(2)";



setTimeout(()=>{


document.querySelector(
".game-screen"
)
.style.filter=
"";


},500);



});







// ===============================
// KAGE ABILITY
// ===============================


const kageButton =
document.querySelector(
".action-area button:nth-child(4)"
);



kageButton.addEventListener(
"click",
()=>{


alert(
"🔥 Kage Ability Activated"
);



});









// ===============================
// MOBILE SCALE HANDLER
// ===============================


function resizeGame(){


const game =
document.querySelector(
".game-screen"
);



const width =
window.innerWidth;



const height =
window.innerHeight;



const scale =
Math.min(
width/1280,
height/720
);



game.style.transform =
`
scale(${scale})
`;



game.style.transformOrigin =
"center center";


}



window.addEventListener(
"resize",
resizeGame
);



resizeGame();





// ======================================
// NEXT PHASE:
//
// REAL CARD DATABASE
// CHAKRA COST
// DAMAGE SYSTEM
// ENEMY AI
// ONLINE MATCH
//
// ======================================
