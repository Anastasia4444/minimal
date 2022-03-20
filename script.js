myCard = [
    {
        image:"woods.png",
        cardName:"woods",
        cardDescription: "Photography"
    },
    {
        image:"path.png",
        cardName:"path",
        cardDescription: "Website Photography"
    },
    {
        image:"darkness.png",
        cardName:"darkness",
        cardDescription: "Website"
    },
    {
        image:"waves.png",
        cardName:"waves",
        cardDescription: "Photography"
    },
    {
        image:"drops.png",
        cardName:"wavdropses",
        cardDescription: "Website"
    },
    {
        image:"ocean.png",
        cardName:"ocean",
        cardDescription: "Website"
    },
    {
        image:"town.png",
        cardName:"town",
        cardDescription: "Website"
    },
    {
        image:"mountain.png",
        cardName:"mountain",
        cardDescription: "Website"
    },
    {
        image:"camera.png",
        cardName:"camera",
        cardDescription: "Website"
    },
    ];
    let s="";

    for (i=0; i<myCard.length; i++) {

    s += `
    <div class="cards">
                    <img src="image/${myCard[i].image}" alt="">
                    <h2 class="cardName titleH2">${myCard[i].cardName}</h2>
                    <h3 class="cardDescription">${myCard[i].cardDescription}</h3>

                </div>
`

} //заверш for
cardsWrapper.innerHTML=s;



