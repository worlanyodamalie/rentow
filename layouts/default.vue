<template>
  <div class="default-container">
    <div class="flex justify-between-xs items-center flex-wrap rentow-header-nav">
      <Logo/>
      <ul class="rentow-ul-nav dn-xs">
        <li> <nuxt-link to="/">Search Properties</nuxt-link> </li>
        <li> <nuxt-link to="/">List Properties</nuxt-link> </li>
        <li> <nuxt-link to="/">Blog</nuxt-link> </li>
        <li> <nuxt-link to="auth/login">Log in</nuxt-link> </li>
      </ul>
      <div class="dn-xs"><nuxt-link to="/auth/register" class="btn btn--green">Register</nuxt-link></div>
      <a class="dn-ns cursor">
        <img src="~/assets/images/hamburger.svg" alt="">
      </a>
    </div>
    <Nuxt />
    <footer class="footer-container pv4">
      <div class="flex flex-wrap w-90-ns center footer-wrapper">
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
             <li><a mailto="teamsupport@rentow.com">Send us an email at <span class="green lh-copy fw7">teamsupport@rentow.com</span></a></li>
          </ul>
      </div>
      <div class="flex w-90-ns items-center center pv4">
          <Logo class="dn-xs"/>
          <a class="cursor ph2 ml-auto-ns"><img src="~/assets/images/twitter.svg" alt="twitter" ></a> 
          <a class="cursor ph2"><img src="~/assets/images/facebook.svg" alt="facebook" ></a> 
          <a class="cursor ph2"><img src="~/assets/images/medium.svg" alt="facebook" ></a> 
      </div>
        
    </footer>
  </div>
</template>

<style scoped>
/* html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
