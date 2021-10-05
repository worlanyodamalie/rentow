<template>
  <div>
    <footer
      class="footer-container pv4"
      :class="[isBackground === true ? 'footer-bg' : '']"
    >
      <div
        class="flex flex-wrap w-90-ns center footer-wrapper"
        :class="[isBackground === true ? 'unset-border-top' : '']"
      >
        <ul class="flex flex-column footer-ul">
          <li><p>Rentow</p></li>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/">About Us</nuxt-link></li>
          <li><nuxt-link to="/">FAQ</nuxt-link></li>
        </ul>
        <ul class="flex flex-column footer-ul">
          <li><p>Discover</p></li>
          <li><nuxt-link to="/">Search Properties</nuxt-link></li>
          <li><nuxt-link to="/">List Properties</nuxt-link></li>
        </ul>
        <ul class="flex flex-column footer-ul">
          <li><p>Legal</p></li>
          <li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
          <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
        </ul>
        <ul class="flex flex-column footer-ul">
          <li><p>Contact Us</p></li>
          <li>
            <a mailto="teamsupport@rentow.com"
              >Send us an email at
              <span class="green lh-copy fw7">teamsupport@rentow.com</span></a
            >
          </li>
        </ul>
      </div>
      <div class="flex w-90-ns items-center center pv4">
        <Logo class="dn-xs" />
        <a class="cursor ph2 ml-auto-ns"
          ><img src="~/assets/images/twitter.svg" alt="twitter"
        /></a>
        <a class="cursor ph2"
          ><img src="~/assets/images/facebook.svg" alt="facebook"
        /></a>
        <a class="cursor ph2"
          ><img src="~/assets/images/medium.svg" alt="facebook"
        /></a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {
    isBackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>
<style>
.footer-bg {
  background: rgba(7, 162, 135, 0.08);
}

.unset-border-top {
  border-top: none;
}
</style>
