export default (service, collection) =>
{
    return {
      actions: {
        async updateCollection(context) {
          let cards = await service.getCollection();
          context.commit("setCollection", cards);
          return;
        },
      },
      mutations: {
        setCollection(state, payload) {
          state.collection = payload;
        },
      },
      state: {
        collection: collection,
      },
    };
}