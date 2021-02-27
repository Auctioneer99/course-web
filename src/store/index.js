import { createStore } from "vuex";
import AWS from "aws-sdk";
import Auth from "@/Scripts/Buisness/AwsAuth.js";

export default createStore({
  actions: {
    async initialize(context) {
      try {
        let response = await Auth.currentAuthenticatedUser();
        context.commit("setUser", response);
      } catch {
        context.commit("setUser", null);
      } finally {
        await context.dispatch("updateCredentials");
      }
    },
    async updateCredentials(context) {
      let response = await Auth.currentCredentials();
      AWS.config.update({
        region: "us-west-2",
        credentials: response,
      });
      context.commit(
        "setGameLift",
        new AWS.GameLift({
          //credentials: response,
          endpoint: "192.168.0.102:9080",
          sslEnabled: false,
        })
      );
      return;
    },
    async logOut(context) {
      await Auth.signOut();
      context.commit("setUser", null);
      await context.dispatch("updateCredentials");
      return;
    },
    async signIn(context, login) {
      let response = await Auth.signIn(login);
      context.commit("setUser", response);
      await context.dispatch("updateCredentials");
      return response;
    },
    async signUp(context, registrationData) {
      await Auth.signUp(
        registrationData.nickname,
        registrationData.mail,
        registrationData.password
      );
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

    async refreshServerList(context) {
      var params = {
        FleetId: "fleet-123",
        Limit: "10",
      };
      let gl = new AWS.GameLift({
        //credentials: response,
        endpoint: "192.168.0.102:9081",
        sslEnabled: false,
      });
      //context.state.gameLift
      gl.describeGameSessions(params, (err, data) => {
        if (err) {
          console.log("error");
          console.log(err, err.stack);
          console.log(data);
        } else {
          console.log(data);
          context.commit("setServerList", data.GameSessions);
          console.log("refreshed");
        }
      });
      return;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setGameLift(state, payload) {
      state.gameLift = payload;
    },
    setServerList(state, payload) {
      state.serverList = payload;
    },
  },
  state: {
    user: null,
    gameLift: null,
    serverList: [],
  },
});
