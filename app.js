// ==========================================
// SHINOBI CLASH v5
// LANDSCAPE BATTLE INTERFACE CONTROLLER
// ==========================================


console.log("⚔ Shinobi Clash v5 Loaded");




// ================================
// CARD SELECTION
// ================================


const cards = document.querySelectorAll(".card");

let selectedCard = null;



cards.forEach(card => {


    card.addEventListener("click",()=>{


        cards.forEach(c=>{

            c.classList.remove("selected");

        });



        card.classList.add("selected");


        selectedCard = card;



        console.log(
            "Selected card"
        );


    });


});







// ================================
// PLAY CARD
// ================================


const playButton =
document.querySelector(".play");



playButton.onclick = ()=>{


    if(!selectedCard){

        alert(
        "Select a card first"
        );

        return;

    }



    selectedCard.classList.add(
        "attack"
    );



    console.log(
        "Card played"
    );



    setTimeout(()=>{


        selectedCard.classList.remove(
            "attack"
        );


        selectedCard.classList.remove(
            "selected"
        );


    },800);



};







// ================================
// DRAW SYSTEM
// ================================


const drawButton =
document.querySelector(
".buttons button:first-child"
);



let deckAmount = 12;



drawButton.onclick = ()=>{


    if(deckAmount <= 0){

        alert(
        "No cards left"
        );

        return;

    }


    deckAmount--;



    document.querySelector(
    ".pile b"
    ).innerText = deckAmount;



    console.log(
    "Drawing card..."
    );


};







// ================================
// JUTSU EFFECT
// ================================


const jutsuButton =
document.querySelector(
".buttons button:nth-child(3)"
);



jutsuButton.onclick = ()=>{


    document.querySelector(
    ".game"
    )
    .classList.add(
    "jutsu"
    );



    setTimeout(()=>{


        document.querySelector(
        ".game"
        )
        .classList.remove(
        "jutsu"
        );


    },1200);



};







// ================================
// RESET GAME
// ================================


document.querySelector(
".header button"
)
.onclick = ()=>{


location.reload();


};









// ================================
// VISUAL EFFECTS
// ================================


const style =
document.createElement(
"style"
);



style.innerHTML = `


.selected{


transform:
translateY(-35px)
scale(1.12);


filter:
drop-shadow(
0 0 25px cyan
);


z-index:50;


}




.attack{


animation:
attackMove .7s;


}



@keyframes attackMove{


0%{

transform:
translate(0,-30px);

}


50%{

transform:
translate(250px,-40px)
scale(1.2);


}



100%{

transform:
translate(0,0);


}


}




.jutsu{


animation:
chakraBurst .25s infinite alternate;


}



@keyframes chakraBurst{


from{

filter:
brightness(1);

}



to{

filter:
brightness(2);

}


}



`;



document.head.appendChild(style);





// ==========================================
// NEXT PHASE:
//
// REAL CARD DATABASE
// CHAKRA COSTS
// ATTACK DAMAGE
// TURN SYSTEM
// ENEMY AI
//
// ==========================================
