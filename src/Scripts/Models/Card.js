import CardStatistics from "@/Scripts/Models/CardStatistics.js";

class Card {
  count = 0;
  statistics = new CardStatistics();

  constructor(id, name, img, description, health, attack, initiative, moves) {
    this.shouldUpdate = true;
    this.id = id;

    this.name = name;
    this.img = img;
    this.description = description;

    (this.health = health),
      (this.attack = attack),
      (this.initiative = initiative);
    this.moves = moves;
  }
}

export default Card;
