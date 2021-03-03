import AWS from "aws-sdk";

import credentials from "@/Credentials/gamelift.js";

let gamelift = new AWS.GameLift({
  //credentials: response,
  endpoint: credentials.endpoint,
  sslEnabled: false,
})
gamelift.e = null;

export default (mapper) => {
  return {
  async getServerList(/*gamelift*/){
    /*
    var params = {
        FleetId: credentials.fleetId,
        Limit: "10",
      };
      await gamelift.describeGameSessions(params, (err, data) => {
        if (err) {
          console.log("error");
          console.log(err, err.stack);
          console.log(data);
        } else {
          console.log(data);
          console.log("refreshed");
          return data.GameSessions;
        }
      });*/

      let response =  {
        "GameSessions": [ 
           { 
              "CreationTime": 10000000,
              "CreatorId": "string",
              "CurrentPlayerSessionCount": 0,
              "DnsName": "string",
              "FleetArn": "string",
              "FleetId": "string",
              "GameProperties": [ 
                 { 
                    "Key": "string",
                    "Value": "string"
                 }
              ],
              "GameSessionData": "string",
              "GameSessionId": "string",
              "IpAddress": "string",
              "MatchmakerData": "string",
              "MaximumPlayerSessionCount": 10,
              "Name": "string",
              "PlayerSessionCreationPolicy": "string",
              "Port": 9080,
              "Status": "string",
              "StatusReason": "string",
              "TerminationTime": 20000
           },
           { 
            "CreationTime": 10000000,
            "CreatorId": "string",
            "CurrentPlayerSessionCount": 0,
            "DnsName": "string",
            "FleetArn": "string",
            "FleetId": "string",
            "GameProperties": [ 
               { 
                  "Key": "string",
                  "Value": "string"
               }
            ],
            "GameSessionData": "string",
            "GameSessionId": "string",
            "IpAddress": "string",
            "MatchmakerData": "string",
            "MaximumPlayerSessionCount": 10,
            "Name": "string",
            "PlayerSessionCreationPolicy": "string",
            "Port": 9080,
            "Status": "string",
            "StatusReason": "string",
            "TerminationTime": 20000
         }
        ],
        "NextToken": "string"
     };

     let servers = [];
     response.GameSessions.forEach((value) => {
      let server = mapper.map(value);
      servers.push(server);
     })

     return servers;
    }
  }
};
