<template>
  <div class="default-container">
    <div class="flex justify-between-xs items-center flex-wrap rentow-header-nav">
      <nuxt-link class="cursor" to="/"><Logo/></nuxt-link>  
      <ul class="rentow-ul-nav dn-xs">
        <li> <nuxt-link to="/">Search Properties</nuxt-link> </li>
        <li> <nuxt-link to="/list-property">List Properties</nuxt-link> </li>
        <li> <nuxt-link to="/">Blog</nuxt-link> </li>
        <li> <nuxt-link to="/auth/login">Log in</nuxt-link> </li>
      </ul>
      <div class="dn-xs"><nuxt-link to="/auth/register" class="btn btn--green">Register</nuxt-link></div>
      <a class="dn-ns cursor">
        <img src="~/assets/images/hamburger.svg" alt="">
      </a>
    </div>
    <Nuxt />

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
