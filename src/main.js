import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

//import AWS from "aws-sdk";
import Amplify from "aws-amplify";
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

Amplify.configure({
  aws_cognito_region: "us-west-2",
  aws_user_pools_id: "us-west-2_ebA6f9OC2",
  aws_user_pools_web_client_id: "6226etjlkdkt7nmc6lbure3njb",
  aws_cognito_identity_pool_id:
    "us-west-2:179a6e94-d52b-4141-994e-9118f902b587",
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
