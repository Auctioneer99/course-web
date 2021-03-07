<template>
  <div class="about">
    <h1>{{profile.name}} -- profile</h1>
    <label>Registration date: {{profile.registred}}</label><br/>
    <label>Last online: {{profile.lastonline}}</label><br/>
    <button class="btn" @click="prof">profileget</button>
  </div>
</template>

<script>

export default {
  computed:
  {
    userid()
    {
      return this.$route.params.id;
    },
    profile() 
    {
      let profile = this.$store.state.users.users[this.userid];
      return profile ? profile : {};
    }
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch("getUser", {invoker: this.$store.state.auth.user.username, username: this.userid});
  },
  beforeCreate() {
  }
}
</script>
