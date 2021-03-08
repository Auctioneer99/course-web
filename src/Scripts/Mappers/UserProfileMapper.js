import UserProfile from "@/Scripts/Models/UserProfile.js";

export default {
  map(data) {
    let userProfile = new UserProfile(
      data.profile.nickname,
      new Date(data.profile.registrationDate).toUTCString(),
      "N/A"
    );
    return userProfile;
  },
};
