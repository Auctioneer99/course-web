//import Card from "@/Scripts/Models/Card.js";

export default {
  map(data) {
    let collection = [];
    data.collection.forEach((value) => {
      let id = value.SK.split("#")[1];
      let cardCounter = {
        id: id,
        count: value.count,
      };
      collection[id] = cardCounter;
    });
    return collection;
  },
};
