<template>
  <div>
    <div class="pb4">
      <nuxt-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="31"
          viewBox="0 0 110 31"
          fill="none"
        >
          <path
            d="M31.5078 23H34.5775V17.1163H36.8799L40.2054 23H43.6589L39.8217 16.6047C40.4613 16.3744 41.024 16.0163 41.5357 15.5814C42.431 14.8395 43.2752 13.6884 43.2752 11.8721C43.2752 9.18605 40.9729 6.88372 37.9031 6.88372H31.5078V23ZM34.5775 14.1744V9.82558H37.9031C39.2078 9.82558 40.2054 10.8488 40.2054 12C40.2054 13.1512 39.2078 14.1744 37.9031 14.1744H34.5775ZM52.9851 19.4186C52.8572 19.5977 52.6782 19.7512 52.4735 19.8791C52.0898 20.1093 51.6037 20.314 50.8107 20.314C49.2758 20.314 48.4061 19.4186 48.1247 18.2674H56.3107L56.3619 17.8837C56.3875 17.6535 56.4386 17.3977 56.4386 17.1163C56.4386 13.5349 53.8805 11.1046 50.8107 11.1046C47.6386 11.1046 44.927 13.7907 44.927 17.1163C44.927 20.4419 47.6386 23.1279 50.8107 23.1279C53.4712 23.1279 55.441 21.1837 56.0549 19.4186H52.9851ZM47.9968 16.2209C48.2782 14.9163 49.2758 13.9186 50.8107 13.9186C52.3456 13.9186 53.3433 14.9163 53.6247 16.2209H47.9968ZM58.6071 23H61.5489V16.4767C61.5489 14.9419 62.5466 13.9186 63.9791 13.9186C65.4117 13.9186 66.4094 14.9419 66.4094 16.4767V23H69.3512V16.093C69.3512 13.0233 67.4071 11.1046 64.6187 11.1046C63.621 11.1046 62.828 11.4372 62.2396 11.7442C61.9071 11.9233 61.5745 12.1535 61.2931 12.3837L60.7815 11.2326H58.6071V23ZM72.9426 18.907C72.9426 21.4651 74.5798 23.1279 76.9077 23.1279C77.2915 23.1279 77.624 23.0767 77.9054 23C78.0589 22.9744 78.1868 22.9233 78.3147 22.8721V20.314L78.1101 20.3907C77.9822 20.4163 77.8287 20.4419 77.5473 20.4419C76.524 20.4419 75.8845 19.8023 75.8845 18.7791V13.9186H78.4426V11.2326H75.8845V8.4186H73.3263V10.0814C73.3263 11.0279 72.8659 11.4884 71.9194 11.4884H71.1519V13.9186H72.9426V18.907ZM85.8602 13.9186C87.523 13.9186 88.8021 15.1721 88.8021 17.1163C88.8021 19.0605 87.523 20.314 85.8602 20.314C84.1974 20.314 82.9184 19.0605 82.9184 17.1163C82.9184 15.1721 84.1974 13.9186 85.8602 13.9186ZM85.8602 11.1046C82.6881 11.1046 79.9765 13.7907 79.9765 17.1163C79.9765 20.4419 82.6881 23.1279 85.8602 23.1279C89.0323 23.1279 91.744 20.4419 91.744 17.1163C91.744 13.7907 89.0323 11.1046 85.8602 11.1046ZM96.4645 23H99.0227L101.197 15.9651L103.371 23H105.93L109.767 11.2326H106.825L104.523 18.7791L102.092 11.2326H100.302L97.8715 18.7791L95.5692 11.2326H92.6273L96.4645 23Z"
            fill="#07A287"
          />
          <path
            d="M2.6647 21.5666V9.75292C2.66465 9.57059 2.7207 9.39265 2.82527 9.24328C2.92983 9.0939 3.07783 8.98033 3.24916 8.91797L11.8394 5.79491C11.9065 5.77049 11.9785 5.76261 12.0493 5.77193C12.1201 5.78126 12.1876 5.80752 12.246 5.84849C12.3045 5.88945 12.3523 5.94392 12.3852 6.00727C12.4182 6.07061 12.4354 6.14097 12.4354 6.21238V10.6118L18.0455 12.4816C18.2225 12.5405 18.3764 12.6537 18.4854 12.805C18.5945 12.9563 18.6531 13.138 18.6531 13.3245V21.5666H20.4296V23.343H0.888214V21.5666H2.6647ZM4.44119 21.5666H10.6589V8.11411L4.44119 10.3756V21.5666ZM16.8766 21.5666V13.965L12.4354 12.4843V21.5666H16.8766Z"
            fill="#07A287"
          />
        </svg>
      </nuxt-link>
    </div>
    <p class="fw7 f3 dark pb4">Welcome,</p>
    <p class="grey fs-normal normal pb3">
      Welcome back to Rentow. Log in to continue.
    </p>
    <form @submit.prevent="login">
      <div v-if="alert" class="pa3 alert-invalid br3 flex justify-between">
        <p>{{ errormessage }}</p>
        <a class="cursor" @click="dismiss">x</a>
      </div>
      <div class="pv3">
        <input
          v-model="logindata.login"
          class="w-100"
          placeholder="Enter your email address"
          type="email"
          name="email"
          required
        />
      </div>
      <div class="pv3">
        <input
          v-model="logindata.password"
          class="w-100"
          placeholder="Enter your  password"
          type="password"
          name="password"
          autocomplete="current-password"
          required
        />
      </div>
      <nuxt-link
        to="/auth/forgot-password"
        class="db tr green pv3 fw7 text-underline-none"
        >Forgot password</nuxt-link
      >

      <div class="pv3">
        <button class="btn btn--green w-100" type="submit">
          <div class="flex justify-center">
            <Loading v-show="isloading" />
            <span v-show="isloading === false">Login</span>
          </div>
        </button>
      </div>
      <p class="pt3 pb4 db tc cursor">
        I don't have an account.<nuxt-link
          to="/auth/register"
          class="ph1 green fw7 fs-normal text-underline-none"
          >Register</nuxt-link
        >
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  layout: "auth",
  data() {
    return {
      logindata: {
        login: "",
        password: "",
      },
      isloading: false,
      errormessage: null,
      alert: false,
    };
  },
  methods: {
    async login() {
      try {
        this.isloading = true;
        // eslint-disable-next-line no-unused-vars
        const response = await this.$auth.loginWith("local", {
          data: this.logindata,
        });

        const profile = response.data.data;
        this.$auth.$storage.setUniversal("user", profile, true);
        this.$auth.$storage.setState("loggedIn", true);
        this.$router.push("/list-property");
        // await this.$auth.setUser(profile);
      } catch (error) {
        this.isloading = false;
        this.alert = true;
        console.log("error", error);
        this.errormessage = error.response
          ? error.response.data.message
          : "Something went wrong";
      }
    },
    dismiss() {
      this.alert = !alert;
    },
  },
};
</script>
<style>
.alert-invalid {
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>
