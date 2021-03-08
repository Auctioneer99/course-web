export default (service, cards) => {
  let getted = false;
  return {
    actions: {
      async getCollection(context, authToken) {
        if (getted == false) {
          console.log("updating collection");
          context.dispatch("updateCollectionCount", authToken);
          getted = true;
        }
      },
      async updateCollectionCount(context, authToken) {
        let cardsCount = await service.getCollection(authToken);
        context.commit("updateCards", cardsCount);
        return;
      },
      async getCardStat(context, { cardid, authToken }) {
        let card = context.state.cards[cardid];
        if (card.shouldUpdate) {
          let stat = await service.getCardStat(cardid, authToken);
          card.statistics = stat;
          card.shouldUpdate = false;
        }
      },
    },
    mutations: {
      updateCards(state, payload) {
        state.cards.forEach((card) => {
          let toUpdate = payload[card.id];
          card.count = toUpdate ? toUpdate.count : 0;
        });
      },
    },
    state: {
      cards: cards,
    },
  };
};
