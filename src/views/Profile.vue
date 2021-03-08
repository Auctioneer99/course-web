<template>
  <div class="d-inline d-inline-flex flex-column h-100 w-100">
    <h1 class="mx-auto">{{profile.name || "---"}}</h1>
    <div class="row overflow-auto">
      <div class="col-3 mb-3 d-inline d-inline-flex flex-column">
        <h3 class="mx-auto">Statistics</h3>
        <label>Registration date: {{profile.registred || "--"}}</label><br/>
        <label>Last online: {{profile.lastonline || "--"}}</label><br/>
        <label>In game time: {{profile.ingametime || "--"}}</label><br/>
      </div>
      <div class="col-9 mb-3 d-inline d-inline-flex flex-column">
        <h3 class="mx-auto">Last activity</h3>

        <div class="overflow-auto border">
          <h4>Recent games</h4>
          <table class="table table-borderless table-hover">
            <thead class="thead-light">
              <tr>
                <th>#</th><th>Match</th><th>Time</th><th>Result</th><th>download</th>
              </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>s3n4dkdf23kldsf</td><td>22:00</td><td>Win</td><td>____</td></tr>
            </tbody>
          </table>
        </div>

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
  async mounted() {
    this.$store.dispatch("getUser", { authToken: await this.$store.getters.authToken, username: this.userid});
  },
  beforeCreate() {
  }
}
</script>
