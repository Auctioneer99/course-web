import CardStatistics from "@/Scripts/Models/CardStatistics.js";

export default {
  map(data) {
    let stat = new CardStatistics();
    stat.killCount = 1;
    stat.damageDealt = data.damageDealt;
    return stat;
  },
};
