class GameSession
{
    constructor(name, currentplayers, maxplayers, status, address)
    {
        this.name = name;
        this.currentplayers = currentplayers;
        this.maxplayers = maxplayers;
        this.status = status;
        this.address = address;
    }
}

export default GameSession;