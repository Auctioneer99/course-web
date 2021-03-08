<template>
  <div class="m-auto" style="width:400px;">
    <h1>ForgotPassword</h1>
    <form @submit.prevent="forgotPassword">
      <div class="form-group">
        <label for="InputEmail">Email address</label>
        <input v-model="mail" required type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" :disabled="disabled">
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Send</button><br><br>
    </form>
    <p class="text-danger">{{error}}</p>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      mail: "",
      error: "",
      disabled: false,
    }
  },
  methods: {
    async forgotPassword() {
      this.disabled = true;
      try {
        await this.$store.dispatch("forgotPassword", this.mail);
        this.$router.push({ name : "ResetPassword", params: { mail: this.mail }});
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
/*
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::vue-spa-demo-zalilov/*"
        },*/
</script>
