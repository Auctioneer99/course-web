export default async (Auth) => {
  let user = await Auth.currentAuthenticatedUser();

  return {
    actions: {
      async logOut(context) {
        await Auth.signOut();
        context.commit("setUser", null);
        return;
      },
      async signIn(context, login) {
        let response = await Auth.signIn(login);
        context.commit("setUser", response);
        return response;
      },
      async signUp(context, registrationData) {
        await Auth.signUp(registrationData);
        return;
      },
      async forgotPassword(context, email) {
        await Auth.forgotPassword(email);
        return;
      },
      async forgotPasswordSubmit(context, forgotPasswordSubmit) {
        await Auth.forgotPasswordSubmit(
          forgotPasswordSubmit.mail,
          forgotPasswordSubmit.code,
          forgotPasswordSubmit.password
        );
        return;
      },
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
    },
    state: {
      user: user,
    },
    getters: {
      async authToken() {
        return await Auth.authToken();
      },
    },
  };
};
