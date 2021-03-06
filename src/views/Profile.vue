<template>
  <div class="about">
    <h1>{{profile.name}} -- profile</h1>
    <label>Registration date: {{profile.registred}}</label><br/>
    <label>Last online: {{profile.lastonline}}</label><br/>
    <button class="btn" @click="prof">profileget</button>
  </div>
</template>

<script>

import $ from "jquery/src/jquery.js";
//import axios from "axious";

export default {
  computed:
  {
    profile() 
    {
      return {};
      //let profile = this.$store.state.users.users["main"];
      //return profile ? profile : {};
    }
  },
  methods: {
    prof() {
      console.log(localStorage);
      let token = localStorage.getItem("CognitoIdentityServiceProvider.6226etjlkdkt7nmc6lbure3njb.c39dd3d9-48bd-4cfb-8f36-3e8b8a50ae77.idToken");
      console.log(token);
      
      $.ajax({
        //headers: { 'Authorization': token },
        url: "https://klcp4z2r7c.execute-api.us-west-2.amazonaws.com/prod/profileget",
        dataType: "json",
        method: "GET",
        success: (data, status) => {
          console.log(data);
          console.log(status);
        }
      });
    }
  }
  ,
  mounted() {
    /*
    axios.get("https://klcp4z2r7c.execute-api.us-west-2.amazonaws.com/prod")
    .then((data) => console.log(data));*/
  },
  beforeCreate() {
    //this.$store.dispatch("getUser", "main");
  }
}
</script>
