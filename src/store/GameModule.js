export default (service) =>
{
  return {
    actions: {
      async refreshServerList(context) {
        let servers = await service.getServerList();
        context.commit("setServerList", servers);
        return;
      },
    },
    mutations: {
      setServerList(state, payload) {
        state.serverList = payload;
      },
    },
    state: {
      serverList: [],
    },
  };
};