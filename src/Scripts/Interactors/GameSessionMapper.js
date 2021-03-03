import GameSession from "@/Scripts/Models/GameSession.js";

export default {
    map(data) {
        let name = data.Name;
        let currentplayers = data.CurrentPlayerSessionCount;
        let maxplayers = data.MaximumPlayerSessionCount;
        let status = data.Status;
        let address = data.IpAddress + ":" + data.Port;
        let session = new GameSession(name, currentplayers, maxplayers, status, address);
        return session;
    }
}