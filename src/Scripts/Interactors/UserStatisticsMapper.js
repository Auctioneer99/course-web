import UserStatistics from "@/Scripts/Models/UserStatistics.js";

class UserStatisticsMapper
{
    constructor()
    {

    }

    map(data)
    {
        let time = data.time;
        let dmg = data.damage;
        let userStatistics = new UserStatistics(time, dmg);
        return userStatistics;
    }
}

export default UserStatisticsMapper;