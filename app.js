// =====================================
// SHINOBI CLASH v3
// MOBILE INTERFACE CONTROLLER
// =====================================


console.log("⚔ Shinobi Clash Mobile UI Loaded");




// CARD SELECTION

const cards = document.querySelectorAll(".card");

let selectedCard = null;



cards.forEach(card => {


    card.addEventListener("click", ()=>{


        // remove old selection

        cards.forEach(c=>{

            c.classList.remove("selected");

        });



        // select card

        card.classList.add("selected");


        selectedCard = card;



        console.log(
            "Selected:",
            card.querySelector("h3").innerText
        );


    });


});






// PLAY CARD


const playButton =
document.querySelector(".play");



playButton.addEventListener(
"click",
()=>{


    if(!selectedCard){

        alert(
        "Choose a card first"
        );

        return;

    }



    selectedCard.classList.add(
    "attack"
    );



    console.log(
    "Attack with:",
    selectedCard.querySelector("h3").innerText
    );



    setTimeout(()=>{


        selectedCard.classList.remove(
        "attack"
        );


        selectedCard.classList.remove(
        "selected"
        );


    },700);



});







// DRAW CARD SYSTEM


const drawButton =
document.querySelector(
".actions button:first-child"
);



let deck = 12;



drawButton.onclick = ()=>{


    if(deck <= 0){

        alert(
        "No cards remaining"
        );

        return;

    }



    deck--;



    document.querySelector(
    ".pile strong"
    ).innerText = deck;



    console.log(
    "Drawing card..."
    );


};







// RESET BUTTON


const reset =
document.querySelector(
".restart"
);



reset.onclick = ()=>{


    location.reload();


};








// JUTSU EFFECT


const jutsu =
document.querySelector(
".actions button:nth-child(3)"
);



jutsu.onclick = ()=>{


    document.querySelector(
    ".game-screen"
    )
    .classList.add(
    "jutsu-mode"
    );



    setTimeout(()=>{


        document.querySelector(
        ".game-screen"
        )
        .classList.remove(
        "jutsu-mode"
        );


    },1200);


};









// ADD ANIMATIONS


const style =
document.createElement(
"style"
);



style.innerHTML = `



.selected{


transform:
translateY(-35px)
scale(1.15);


filter:
drop-shadow(
0 0 20px cyan
);


z-index:50;


}



.attack{


animation:
attackMove .6s;


}



@keyframes attackMove{


0%{

transform:
translateY(-30px)
translateX(0);

}



50%{

transform:
translateY(-30px)
translateX(150px)
scale(1.2);

}



100%{

transform:
translateY(0)
translateX(0);

}



}




.jutsu-mode{


animation:
chakraFlash .25s infinite alternate;


}



@keyframes chakraFlash{


from{

filter:
brightness(1);


}



to{

filter:
brightness(1.8);


}



}



`;



document.head.appendChild(style);







// =====================================
// NEXT PHASE:
// REAL CARD DATABASE
// TURN ENGINE
// DAMAGE SYSTEM
// AI OPPONENT
// =====================================
