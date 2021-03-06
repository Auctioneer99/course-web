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

export default {
    map(card)
    {
        card.visual = cardvisual[card.id];
        return card;
    }
}