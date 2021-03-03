export default (service) => {
  return {
    actions: {
      async getUser(context, username) {
        let user = context.state.users[username];
        if (!user) {
          user = await service.getUser(username);
          context.commit("addUser", { username, user });
        }
        return user;
      },
    },
    mutations: {
      addUser(state, payload) {
        state.users[payload.username] = payload.user;
      },
    },
    state: {
      users: [],
    },
  };
};
