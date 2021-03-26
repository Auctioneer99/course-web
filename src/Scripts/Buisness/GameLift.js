import AWS from "aws-sdk";

import credentials from "@/Credentials/gamelift.js";

let gamelift = new AWS.GameLift({
  //credentials: response,
  endpoint: credentials.endpoint,
  sslEnabled: false,
});
gamelift.e = null;

export default (mapper) => {
  return {
    async getServerList(/*gamelift*/) {
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

      let response = {
        GameSessions: [
          {
            CreationTime: 10000000,
            CreatorId: "string",
            CurrentPlayerSessionCount: 0,
            DnsName: "string",
            FleetArn: "string",
            FleetId: "string",
            GameProperties: [
              {
                Key: "string",
                Value: "string",
              },
            ],
            GameSessionData: "string",
            GameSessionId: "string",
            IpAddress: "5.180.180.244",
            MatchmakerData: "string",
            MaximumPlayerSessionCount: 10,
            Name: "id-3428324-gfflDDsfa",
            PlayerSessionCreationPolicy: "string",
            Port: 9080,
            Status: "Normal",
            StatusReason: "string",
            TerminationTime: 20000,
          },
          {
            CreationTime: 10000000,
            CreatorId: "string",
            CurrentPlayerSessionCount: 0,
            DnsName: "string",
            FleetArn: "string",
            FleetId: "string",
            GameProperties: [
              {
                Key: "string",
                Value: "string",
              },
            ],
            GameSessionData: "string",
            GameSessionId: "string",
            IpAddress: "5.180.180.244",
            MatchmakerData: "string",
            MaximumPlayerSessionCount: 10,
            Name: "id-1234324-skSjdsfl",
            PlayerSessionCreationPolicy: "string",
            Port: 9081,
            Status: "Normal",
            StatusReason: "string",
            TerminationTime: 20000,
          },
          {
            CreationTime: 10000000,
            CreatorId: "string",
            CurrentPlayerSessionCount: 0,
            DnsName: "string",
            FleetArn: "string",
            FleetId: "string",
            GameProperties: [
              {
                Key: "string",
                Value: "string",
              },
            ],
            GameSessionData: "string",
            GameSessionId: "string",
            IpAddress: "5.180.180.244",
            MatchmakerData: "string",
            MaximumPlayerSessionCount: 10,
            Name: "id-6854324-mbTrsdf",
            PlayerSessionCreationPolicy: "string",
            Port: 9082,
            Status: "Normal",
            StatusReason: "string",
            TerminationTime: 20000,
          },
          {
            CreationTime: 10000000,
            CreatorId: "string",
            CurrentPlayerSessionCount: 0,
            DnsName: "string",
            FleetArn: "string",
            FleetId: "string",
            GameProperties: [
              {
                Key: "string",
                Value: "string",
              },
            ],
            GameSessionData: "string",
            GameSessionId: "string",
            IpAddress: "5.180.180.244",
            MatchmakerData: "string",
            MaximumPlayerSessionCount: 10,
            Name: "id-02355-dsfkiiI",
            PlayerSessionCreationPolicy: "string",
            Port: 9083,
            Status: "Normal",
            StatusReason: "string",
            TerminationTime: 20000,
          },
          {
            CreationTime: 10000000,
            CreatorId: "string",
            CurrentPlayerSessionCount: 0,
            DnsName: "string",
            FleetArn: "string",
            FleetId: "string",
            GameProperties: [
              {
                Key: "string",
                Value: "string",
              },
            ],
            GameSessionData: "string",
            GameSessionId: "string",
            IpAddress: "5.180.180.244",
            MatchmakerData: "string",
            MaximumPlayerSessionCount: 10,
            Name: "id-124939-slkOkk",
            PlayerSessionCreationPolicy: "string",
            Port: 9084,
            Status: "Normal",
            StatusReason: "string",
            TerminationTime: 20000,
          },
        ],
        NextToken: "string",
      };

      let servers = [];
      response.GameSessions.forEach((value) => {
        let server = mapper.map(value);
        servers.push(server);
      });

      return servers;
    },
  };
};
