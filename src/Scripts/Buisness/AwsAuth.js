import AWS from "aws-sdk";

import Amplify, { Auth } from "aws-amplify";

import credentials from "@/Credentials/cognito.js";

import awsconfig from "@/Credentials/aws.js";
AWS.config.update({
  region: awsconfig.region,
});

Amplify.configure({
  aws_cognito_region: credentials.aws_cognito_region,
  aws_user_pools_id: credentials.aws_user_pools_id,
  aws_user_pools_web_client_id: credentials.aws_user_pools_web_client_id,
  aws_cognito_identity_pool_id: credentials.aws_cognito_identity_pool_id,
});

export default {
  async currentAuthenticatedUser() {
    let response;
    try {
      response = await Auth.currentAuthenticatedUser();
    } catch {
      response = null;
    } finally {
      await this.updateCredentials();
    }
    return response;
  },
  async updateCredentials() {
    let response = await Auth.currentCredentials();
    AWS.config.update({
      credentials: response,
    });
    return response;
  },
  async signOut() {
    Auth.signOut();
    await this.updateCredentials();
    return;
  },
  async signIn(login) {
    const user = await Auth.signIn(login.mail, login.password);
    await this.updateCredentials();
    return user;
  },
  async signUp(registrationData) {
    let response = await Auth.signUp({
      username: registrationData.email,
      password: registrationData.password,
      attributes: {
        nickname: registrationData.nickname,
      },
    });
    return response;
  },
  async forgotPassword(mail) {
    await Auth.forgotPassword(mail);
  },
  async forgotPasswordSubmit(mail, code, password) {
    console.log(mail);
    console.log(code);
    console.log(password);

    await Auth.forgotPasswordSubmit(mail, code, password);
  },
  async authToken() {
    let user = await Auth.currentAuthenticatedUser();
    let tokenpath =
      "CognitoIdentityServiceProvider.6226etjlkdkt7nmc6lbure3njb." +
      user.username +
      ".idToken";
    let token = localStorage.getItem(tokenpath);
    return token;
  },
};
