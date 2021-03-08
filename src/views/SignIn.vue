<template>
  <div class="m-auto" style="width:400px;">
    <h1>Sign In</h1>
    <form @submit.prevent="signIn">
      <div class="form-group">
        <label tabindex="1" for="InputEmail">Email address</label>
        <input v-model="mail" required type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputPassword">Password</label>
        <input tabindex="2" v-model="password" required type="password" class="form-control" id="InputPassword" :disabled="disabled">
      </div>
      <!--
      <div class="form-group form-check ml-3">
        <input type="checkbox" v-model="check" class="form-check-input" id="Check">
        <label class="form-check-label" for="Check">Check me out</label>
      </div>
      -->
      <button class="btn btn-light btn-lg" :disabled="disabled">Log In</button><br><br>
    </form>
      <button class="btn btn-light btn-sm" @click="redirectForgotPassword">Forgot password?</button>
      <p class="text-danger">{{error}}</p>
  </div>
</template>

<script>
import Login from '@/Scripts/Models/Auth/Login.js';

export default {
  name: 'SignIn',
  data() {
    return {
      mail: "",
      password: "",
      error: "",
      disabled: false,
    }
  },
  methods: {
    redirectForgotPassword() {
      this.$router.push("/forgotpassword");
    },
    async signIn() {
      this.disabled = true;
      try {
        let data = new Login(this.mail, this.password);
        await this.$store.dispatch("signIn", data);
        let user = this.$store.state.auth.user;
        let authToken = await this.$store.getters.authToken;
        await this.$store.dispatch("getUser", {authToken: authToken, username: user.username});
        
        this.$router.push("/profile/" + user.username);
      } catch (error) {
          this.error = error.message;
          console.log('error signing in', error);
      }
      finally
      {
        this.disabled = false;
      }
    }
  },
}
</script>
