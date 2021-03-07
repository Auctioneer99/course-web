import AWS from "aws-sdk";

import Amplify, { Auth } from "aws-amplify";

//import AWS from "aws-sdk";
/*
AWS.config = new AWS.Config({
  region: "us-west-2",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:179a6e94-d52b-4141-994e-9118f902b587",
  }),
  sslEnabled: true,
  amplify: {
    Auth: {
      userPoolId: "us-west-2_ebA6f9OC2",
      userPoolWebClientId: "6226etjlkdkt7nmc6lbure3njb",
    },
  },
});*/
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
  async forgotPasswordSubmit({ mail, code, password }) {
    await Auth.forgotPasswordSubmit(mail, code, password);
  },
};
