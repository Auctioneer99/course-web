import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

import authModule from "@/store/AuthModule.js";
import awsAuth from "@/Scripts/Buisness/AwsAuth.js";

import gameModule from "@/store/GameModule.js";
import gameLift from "@/Scripts/Buisness/GameLift.js";
import gameMapper from "@/Scripts/Mappers/GameSessionMapper.js";

import usersModule from "@/store/UserProfileModule.js";
import userService from "@/Scripts/Buisness/AwsUser.js";
import userMapper from "@/Scripts/Mappers/UserProfileMapper.js";

import collectionModule from "@/store/CollectionModule.js";
import collectionService from "@/Scripts/Buisness/AwsDynamoCollection.js";
import collectionMapper from "@/Scripts/Mappers/CollectionMapper.js";
import cardStatisticsMapper from "@/Scripts/Mappers/CardStatisticsMapper.js";
import cards from "@/Scripts/Models/Collection.js";

let build = async () => {
  let auth = await authModule(awsAuth);
  let game = gameModule(gameLift(gameMapper));
  let users = usersModule(userService(userMapper));

  let collection = collectionModule(
    collectionService(collectionMapper, cardStatisticsMapper),
    cards
  );

  const store = new Vuex.Store({
    modules: {
      auth: auth,
      game: game,
      users: users,
      collection: collection,
    },
  });

  createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
};

build();
