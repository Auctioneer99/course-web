import CardStatistics from "@/Scripts/Models/CardStatistics.js";

export default {
  map(data) {
    let stat = new CardStatistics();
    stat.killCount = 10;
    stat.deathCount = 6;
    stat.playCount = 8;
    stat.damageDealt = 548;
    stat.damageReceived = 349;
    console.log(data);
    return stat;
  },
};
