import UserProfile from "@/Scripts/Models/UserProfile.js";

export default {
    map(data)
    {
        let userProfile = new UserProfile(data.name, data.registred, data.lastonline);
        return userProfile;
    }
}