import { Auth } from "aws-amplify";

export default {
  currentAuthenticatedUser: async () => {
    let response = await Auth.currentAuthenticatedUser();
    return response;
  },
  currentCredentials: async () => {
    let response = await Auth.currentCredentials();
    return response;
  },
  signOut: async () => {
    Auth.signOut();
    return;
  },
  signIn: async (login) => {
    const user = await Auth.signIn(login.mail, login.password);
    return user;
  },
  register: async (nickname, mail, password) => {
    let response = await Auth.signUp({
      username: mail,
      password: password,
      attributes: {
        nickname: nickname,
      },
    });
    return response;
  },
  forgotPassword: async (mail) => {
    await Auth.forgotPassword(mail);
  },
  forgotPasswordSubmit: async ({ mail, code, password }) => {
    await Auth.forgotPasswordSubmit(mail, code, password);
  },
};
