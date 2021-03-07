import $ from "jquery/src/jquery.js";

export default (mapper) => {
  return {
    async getCollection(authToken) {
      let url =
        "https://4gmu6g6j56.execute-api.us-west-2.amazonaws.com/prod/collection";

      let response = await $.ajax({
        headers: { Authorization: authToken },
        url: url,
        method: "GET",
      });
      let collection = mapper.map(response);
      return collection;
    },
    async getCardInfo() {},
  };
};
