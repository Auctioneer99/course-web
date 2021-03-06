import Card from "@/Scripts/Models/Card.js";

export default {
    map(data)
    {
        let cardId = data.cardId;
        let count = data.count;
        let card = new Card(cardId, count);
        return card;
    }
};