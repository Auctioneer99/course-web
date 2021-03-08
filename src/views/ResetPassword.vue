<template>
  <div class="m-auto" style="width:400px;">
    <h1>Reset Password</h1>
    <form @submit.prevent="resetPassword">
      <div class="form-group">
        <label for="InputCode">Code from email</label>
        <input v-model="code" required type="text" class="form-control" id="InputCode" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputPassword">New password</label>
        <input v-model="password" required type="password" class="form-control" id="InputPassword" :disabled="disabled">
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Send</button><br><br>
    </form>
    <p class="text-danger">{{error}}</p>
  </div>
</template>

<script>
//import { Auth } from 'aws-amplify';

import ForgotPasswordSubmit from "@/Scripts/Models/Auth/ForgotPasswordSubmit.js";

export default {
  name: 'ResetPassword',
  data() {
    return {
      code: "",
      password: "",
      error: "",
      disabled: false,
    }
  },
  props: ["mail"],
  mounted() {
    console.log("mail", this.mail);
  },
  methods: {
    async resetPassword() {
      this.disabled = true;
      try {
          let data = new ForgotPasswordSubmit(this.mail, this.code, this.password);
          await this.$store.dispatch("forgotPasswordSubmit", data)
          this.$router.push("/signin");
      } catch (error) {
          this.error = error.message;
          console.log('error forgotpassword in', error);
      }
      finally
      {
        this.disabled = false;
      }
    }
  },
}
</script>
