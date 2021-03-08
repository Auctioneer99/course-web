import ApiRoutes from "@/Credentials/apiroutes.js";

import $ from "jquery/src/jquery.js";

export default (mapper) => {
  return {
    async getUser(username, authToken) {
      let response = await $.ajax({
        headers: { Authorization: authToken },
        url: ApiRoutes.userprofile + username,
        method: "GET",
      });

      let profile = mapper.map(response);
      return profile;
    },
  };
};
