// =====================================
// SHINOBI CLASH - INTERFACE CONTROLLER
// =====================================


console.log("⚔ Shinobi Clash initialized");



// CARD SELECTION SYSTEM

const cards = document.querySelectorAll(".card");

let selectedCard = null;



cards.forEach(card => {


    card.addEventListener("click",()=>{


        // remove previous selection

        cards.forEach(c=>{

            c.classList.remove("selected");

        });



        // select current card

        card.classList.add("selected");


        selectedCard = card;


        console.log(
            "Selected card:",
            card.innerText
        );


    });


});





// PLAY BUTTON


const playButton =
document.querySelector(".play");



playButton.addEventListener(
"click",
()=>{


    if(!selectedCard){

        alert(
        "Select a card first!"
        );

        return;

    }



    selectedCard.style.animation =
    "attack 0.5s";



    console.log(
    "Playing:",
    selectedCard.innerText
    );



    setTimeout(()=>{


        selectedCard.classList.remove(
        "selected"
        );


    },600);



});





// DRAW BUTTON


const drawButton =
document.querySelector(
"footer button:first-child"
);



let deckCount = 12;



drawButton.addEventListener(
"click",
()=>{


    if(deckCount <=0){

        alert(
        "Deck empty!"
        );

        return;

    }



    deckCount--;


    document.querySelector(
    ".deck b"
    ).innerText = deckCount;



    console.log(
    "Card drawn"
    );

});







// JUTSU BUTTON


const jutsuButton =
document.querySelectorAll(
"footer button"
)[2];



jutsuButton.onclick=()=>{


    document.body.classList.add(
    "jutsu-active"
    );



    console.log(
    "Jutsu activated!"
    );



    setTimeout(()=>{


        document.body.classList.remove(
        "jutsu-active"
        );


    },1500);


};







// KAGE ABILITY


const kageButton =
document.querySelectorAll(
"footer button"
)[3];



kageButton.onclick=()=>{


    alert(
    "Kage Ability ready!"
    );


};







// ADD CSS ANIMATIONS DYNAMICALLY


const style =
document.createElement(
"style"
);



style.innerHTML = `


.selected{

transform:
translateY(-35px)
scale(1.1);

filter:
drop-shadow(
0 0 25px #00ffff
);

}



@keyframes attack{

0%{

transform:
translateX(0);

}


50%{

transform:
translateX(120px)
scale(1.2);

}



100%{

transform:
translateX(0);

}


}



.jutsu-active{

animation:
jutsuFlash .3s infinite alternate;

}



@keyframes jutsuFlash{


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





// =====================================
// END OF INTERFACE VERSION
// NEXT:
// REAL CARD DATA + TURN SYSTEM
// =====================================
