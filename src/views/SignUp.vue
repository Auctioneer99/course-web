<template>
  <div class="m-auto" style="width:400px;">
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <div class="form-group">
        <label for="InputLogin">Nickname</label>
        <input v-model="nickname" required type="text" class="form-control" id="InputLogin" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputEmail">Email address</label>
        <input v-model="mail" required type="email" class="form-control" id="InputEmail" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputPassword1">Password</label>
        <input v-model="password1" required type="password" class="form-control" id="InputPassword1" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputPassword2">Password</label>
        <input v-model="password2" required type="password" class="form-control" id="InputPassword2" :disabled="disabled">
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Sign Up</button>
    </form>
    <p class="text-success">{{success}}</p>
    <p class="text-danger">{{error}}</p>
  </div>
</template>

<script>
import Registration from '@/Scripts/Models/Registration.js';

export default {
  name: 'SignUp',
  data() {
    return {
      nickname: "",
      mail: "",
      password1: "",
      password2: "",
      error: "",
      success: "",
      disabled: false,
    }
  },
  methods: {
    async signUp() {
      if (this.password1 != this.password2)
      {
        this.error = "Passwords do not match";
        return;
      }
      this.disabled = true;
      try {
        let data = new Registration(this.nickname, this.mail, this.password1);
        await this.$store.dispatch("signUp", data);
        this.error = "";
        this.success = "Success. Check out your email address";
      } catch (error) {
          console.log('error signing up:', error);
          this.error = error.message;
          this.success = "";
      } finally {
        this.disabled = false;
      }
    }
  }
}
</script>
