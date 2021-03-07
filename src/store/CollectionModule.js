export default (service, cards) => {
  let getted = false;
  return {
    actions: {
      async getCollection(context, invoker) {
        if (getted == false) {
          console.log("updating collection");
          context.dispatch("updateCollectionCount", invoker);
          getted = true;
        }
      },
      async updateCollectionCount(context, invoker) {
        let tokenpath =
          "CognitoIdentityServiceProvider.6226etjlkdkt7nmc6lbure3njb." +
          invoker +
          ".idToken";
        let token = localStorage.getItem(tokenpath);
        let cardsCount = await service.getCollection(token);
        context.commit("updateCards", cardsCount);
        return;
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
