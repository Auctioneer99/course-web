export default (service, cards) =>
{
  let getted = false;
    return {
      actions: {
        async getCollection(context) {
          if (getted == false)
          {
            console.log("updating collection");
            context.dispatch("updateCollectionCount");
            getted = true;
          }
        },
        async updateCollectionCount(context) {
          let cardsCount = await service.getCollection();
          context.commit("updateCards", cardsCount);
          return;
        },
      },
      mutations: {
        updateCards(state, payload) {
          state.cards.forEach(card => {
            let count = payload[card.id];
            card.count = count ? count : 0;
          });
        },
      },
      state: {
        cards: cards,
      },
    };
}