console.log("Shinobi Clash loaded");


const cards=document.querySelectorAll(".card");


cards.forEach(card=>{

    card.onclick=()=>{

        cards.forEach(c=>{
            c.style.transform="scale(1)";
        });


        card.style.transform="scale(1.1)";

        console.log(
            "Selected:",
            card.innerText
        );

    };

});
