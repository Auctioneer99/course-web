import Card from "@/Scripts/Models/Card.js";

export default {
  map(data) {
    let collection = [];
    data.forEach((count, id) => {
      let card = new Card(id, count);
      collection.push(card);
    });
    return collection;
  },
};
