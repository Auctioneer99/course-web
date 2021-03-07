<template>
  <div class="d-inline d-inline-flex flex-column h-100 w-100">
    <h1 class="mx-auto">{{profile.name}} -- profile</h1>
    <div class="row overflow-auto">
      <div class="col-3 mb-3 d-inline d-inline-flex flex-column">
        <h3 class="mx-auto">Statistics</h3>
        <label>Registration date: {{profile.registred}}</label><br/>
        <label>Last online: --{{profile.lastonline}}</label><br/>
      </div>
      <div class="col-9 mb-3 d-inline d-inline-flex flex-column">
        <h3 class="mx-auto">Last activity</h3>
        <div style="width:300px;height:200px;background-color:black">asd</div>
      </div>
    </div>
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
    //this.$store.dispatch("getUser", {invoker: this.$store.state.auth.user.username, username: this.userid});
  },
  beforeCreate() {
  }
}
</script>
