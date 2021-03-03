//import AWS from "aws-sdk";

//import credentials from "@/Credentials/gamelift.js";

//import UserStatisticsMapper from "@/Scripts/Models/UserStatisticsMapper.js";

//mapper = new UserStatisticsMapper();
export default (mapper) => {

  return {
    async getUser(username) {

      let response = {
        name: username,
        registred: "01.01.2000",
        lastonline: "01.01.2020",

      }

      let profile = mapper.map(response);
      return profile;
    }
  }
};
