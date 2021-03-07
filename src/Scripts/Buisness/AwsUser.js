//import AWS from "aws-sdk";

//import credentials from "@/Credentials/gamelift.js";

//import UserStatisticsMapper from "@/Scripts/Models/UserStatisticsMapper.js";

import $ from "jquery/src/jquery.js";
//mapper = new UserStatisticsMapper();
export default (mapper) => {
  return {
    async getUser(username, authToken) {
      let url =
        "https://4gmu6g6j56.execute-api.us-west-2.amazonaws.com/prod/profile?id=" +
        username;

      let response = await $.ajax({
        headers: { Authorization: authToken },
        url: url,
        method: "GET",
      });

      let profile = mapper.map(response);
      return profile;
    },
  };
};
