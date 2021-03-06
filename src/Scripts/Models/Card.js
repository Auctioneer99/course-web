class Card
{
    count = 0;
    statistics = {};

    constructor(id, name, img, description, health, attack, initiative, moves)
    {
        this.id = id;

        this.name = name;
        this.img = img;
        this.description = description;

        this.health = health,
        this.attack = attack,
        this.initiative = initiative;
        this.moves = moves;
    }
}

export default Card;