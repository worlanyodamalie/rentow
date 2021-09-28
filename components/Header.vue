<template>
    <div class="flex justify-between-xs items-center flex-wrap rentow-header-nav">
      <nuxt-link class="cursor" to="/"><Logo/></nuxt-link>  
      <ul class="rentow-ul-nav dn-xs">
        <li> <nuxt-link to="/">Search Properties</nuxt-link> </li>
        <li> <nuxt-link to="/list-property">List Properties</nuxt-link> </li>
        <li> <nuxt-link to="/">Blog</nuxt-link> </li>
        <!-- <li> <nuxt-link to="/auth/login">Log in</nuxt-link> </li> -->
      </ul>
        <div class="user-profile flex items-center ml-auto">
            <img class="" src="~/assets/images/user-image.svg" alt="">
            <label for="user-profile" class="mr1 ml1 fw5 fs-normal cursor f5">Adrian Koomson-Barnes
                    <svg width="10" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99991 6.9995C6.77191 6.9995 6.54491 6.9225 6.35991 6.7675L0.359909 1.7675C-0.0640909 1.4145 -0.122091 0.783495 0.231909 0.359495C0.584909 -0.0645046 1.21491 -0.121505 1.63991 0.231495L7.01091 4.7075L12.3729 0.392495C12.8029 0.0464955 13.4329 0.114495 13.7789 0.544495C14.1249 0.974495 14.0569 1.6035 13.6269 1.9505L7.62691 6.7785C7.44391 6.9255 7.22191 6.9995 6.99991 6.9995Z" fill="#404D61"/>
                    </svg>
            </label>
            <input type="checkbox" name="" id="user-profile">  
            <ul class="user-profile-menu">
                <li><nuxt-link to="/" class="text-underline-none dark f5 ph3 fw5">Logout</nuxt-link></li>
            </ul>
        </div>
            
        
      
      <!-- <div class="dn-xs"><nuxt-link to="/auth/register" class="btn btn--green">Register</nuxt-link></div> -->
      <a class="dn-ns cursor">
        <img src="~/assets/images/hamburger.svg" alt="">
      </a>
    </div>
</template>
<script>
export default {
    name: 'Header',

}
</script>
<style >
 .user-profile input[type="checkbox"]{
    opacity: 0;
    position: fixed;
    width: 0;
 }

 .user-profile-menu{
    position: absolute;
    top: 3rem;
    right:0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    margin: 2px 0 0 0;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
    background-color: #ffffff;
    list-style-type: none;
    width:15rem;
 }

 .user-profile input[type="checkbox"] + .user-profile-menu {
  display: none;
} 

 .user-profile input[type="checkbox"]:checked + .user-profile-menu {
  display: block;
} 

</style>