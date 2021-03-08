import $ from "jquery/src/jquery.js";
import ApiRoutes from "@/Credentials/apiroutes.js";

export default (collectionMapper, statMapper) => {
  return {
    async getCollection(authToken) {
      let response = await $.ajax({
        headers: { Authorization: authToken },
        url: ApiRoutes.collection,
        method: "GET",
      });
      let collection = collectionMapper.map(response);
      return collection;
    },
    async getCardStat(cardid, authToken) {
      let response = await $.ajax({
        headers: { Authorization: authToken },
        url: ApiRoutes.cardstat + cardid,
        method: "GET",
      });
      console.log(response);
      let stat = statMapper.map(response);
      console.log(stat);
      return stat;
    },
  };
};
