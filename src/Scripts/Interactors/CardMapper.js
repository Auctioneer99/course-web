import Card from "@/Scripts/Models/Card.js";

let cardvisual = {
    1: {
        name: "token",
        img: "",
        description: "none"
    },
    2: {
        name: "token2",
        img: "",
        description: "none2"
    }
}

class CardMapper
{
    constructor()
    {

    }

    map(data)
    {
        let cardId = data.cardId;
        let count = data.count;
        let visual = cardvisual[cardId];
        let card = new Card(0, count, visual.name, visual.img, visual.description);
        return card;
    }
}

export default CardMapper;