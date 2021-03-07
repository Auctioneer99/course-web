export default (service) => {
  return {
    actions: {
      async getUser(context, { invoker, username }) {
        let user = context.state.users[username];
        if (!user) {
          let tokenpath =
            "CognitoIdentityServiceProvider.6226etjlkdkt7nmc6lbure3njb." +
            invoker +
            ".idToken";
          let token = localStorage.getItem(tokenpath);

          user = await service.getUser(username, token);
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
