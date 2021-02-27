<template>
  <div class="fixed-top m-2" style="width:0px;">
    <button class="btn btn-light" @click="toggleUI">
      <svg ref="chevronUp" width="50" height="50" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>
      <svg ref="chevronDown" width="50" height="50" viewBox="0 0 16 16" class="bi bi-chevron-down d-none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
  <nav ref="nav" class="navbar navbar-light bg-light mb-5 ml-0 row w-100">
    <div class="col-1 m-0"></div>
    <div class="navbar-brand col-2 justify-content-center m-0">
      <h1>My Game</h1>
    </div>
    <ul class="nav justify-content-center col-6 m-0">
      <li class="nav-item">
        <router-link class="nav-link" to="/"><button class="btn btn-light btn-lg">Home</button></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/serverbrowser"><button class="btn btn-light btn-lg">Server Browser</button></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about"><button class="btn btn-light btn-lg">About</button></router-link>
      </li>
    </ul>
    <ul class="nav justify-content-center w-100 col-3 m-0">
      <template v-if="!user">
      <li class="nav-item">
        <router-link class="nav-link" to="/signin"><button class="btn btn-light btn-lg">Sign In</button></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/signup"><button class="btn btn-light btn-lg">Sign Up</button></router-link>
      </li>
      </template>
      <template v-else>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/profile/' + user.username"><button class="btn btn-light btn-lg">{{user.attributes.nickname}}</button></router-link>
        </li>
        <li class="nav-item">
          <div class="nav-link"><button class="btn btn-light btn-lg" @click="this.$store.dispatch('logOut')">Log out</button></div>
        </li>
      </template>
    </ul>
  </nav>
  <div ref="navcontainer" class="container ml-auto mr-auto vh-100">
    <div class="border p-3 bg-white" style="height:700px;">
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  data() {
    return {
      isHidden: false,
    }
  },
  computed: {
    user()  {
      return this.$store.state.user;
    }
  },
  methods: {
    log() {
      console.log(this.user)
    },
    toggleUI() {
      if (this.isHidden)
      {
        Velocity(this.$refs.nav, {margin: "0px"}, {duration: 0});
        Velocity(this.$refs.nav, {opacity: 1});
        Velocity(this.$refs.navcontainer, {margin: "-100px"}, {duration: 0});
        Velocity(this.$refs.navcontainer, {opacity: 1, margin: "0px"});
      }
      else
      {
        Velocity(this.$refs.nav, {opacity: 0});
        Velocity(this.$refs.nav, {margin: "-200px"});
        Velocity(this.$refs.navcontainer, {opacity: 0, margin: "-100px"});
        Velocity(this.$refs.navcontainer, {margin: "-1000px"}, {duration: 0});
      }
      this.$refs.chevronUp.classList.toggle("d-none");
      this.$refs.chevronDown.classList.toggle("d-none");
      this.isHidden = !this.isHidden
    },
  },
  created() {
    this.$store.dispatch("initialize");
  },
}
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.16s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>