<template>
  <div class="homepage-container">
    <div class="flex justify-center flex-wrap-ms">
        <div>
          <h1 class="lh-copy fs-normal fw7 f1 green mw7-ns pt4">You will find your perfect space here</h1>
          <h3 class="lh-copy normal fs-normal fw3 dark mw6-ns">Search for apartments based on your unique needs and your next home will be right in front of you.</h3>
        </div>
        <div>
          <div>
            <HeroImage />     
          </div>
        </div>
      
    </div>
    <div class="bb b--light-gray flex pv3  w-90-ns center"></div>
    <div class="flex flex-column w-90-ns center">
        <h2 class="f2 pv5 dark fw7 fs-normal">Explore nearby</h2>
        <div class="nearby-cards">
            <div v-for="item in exploreLocations" :key="item.location" class="flex items-center pb5">
              <div>
                <DefaultLocation />
              </div>
              <div class="ph3">
                <p class="fw7 fs-normal green f4 lh-copy">{{item.location}}</p>
                <p class="lh-copy fs-normal fw4 grey--4">{{item.apartment}} apartment(s)</p>
              </div>
            </div>
        </div>
    </div>
    <div class="flex flex-column w-90-ns center">
        <h2 class="f2 pv5 dark fw7 fs-normal">Designed to meet your needs</h2>
        <div class="designed-meet-needs pb4">
            <div class="flex flex-column">
                <div>
                   <img class="responsive" src="~/assets/images/entire-homes.svg" alt="" srcset="">
                </div>
                <h3 class="dark fs-normal fw7 pv3">Entire homes</h3>
            </div>
            <div class="flex flex-column">
                <div>
                   <img class="responsive" src="~/assets/images/short-stays.svg" alt="" srcset="">
                </div>
                <h3 class="dark fs-normal fw7 pv3">Short stays</h3>
            </div>
            <div class="flex flex-column">
                <div>
                   <img class="responsive" src="~/assets/images/newly-built-homes.svg" alt="" srcset="">
                </div>
                <h3 class="dark fs-normal fw7 pv3">Newly built homes</h3>
            </div>
        </div>
        <div class="w-100 mv4 find-location">
           <div class="flex flex-column pv4">
               <h3 class="f3 fw7 fs-normal lh-copy white mw6-ns ">Not sure which location to choose?We got you.</h3>
               <div class="pt3">
                  <nuxt-link to="/" class="btn btn--green" style="width: unset;">Click here</nuxt-link>
               </div>
           </div>
        </div>
        <h2 class="f2 pv5 dark fw7 fs-normal">Featured properties</h2>
        <FeaturedProperty />
        <div class="mv4 br3 pt5 ph5 home-banner">
            <div class="flex flex-wrap justify-between">
                <div>
                   <h3 class="dark fw7 lh-copy f2 mw6-ns">Download Rentow mobile app today!</h3>
                   <h4 class="normal fs-normal dark pv3 f4">Available on</h4>
                   <div class="pb5 flex gap-1 flex-wrap">
                       <a class="btn btn--green mb2" style="border-radius:8px;">
                          <div class="flex items-center pv1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none">
                                  <path d="M28.3922 26.0767C27.8715 27.2458 27.2552 28.3219 26.5412 29.3112C25.5679 30.66 24.7709 31.5936 24.1568 32.112C23.2047 32.963 22.1846 33.3988 21.0923 33.4236C20.3081 33.4236 19.3624 33.2067 18.2615 32.7667C17.1571 32.3289 16.1421 32.112 15.2141 32.112C14.2407 32.112 13.1969 32.3289 12.0803 32.7667C10.962 33.2067 10.0612 33.436 9.3724 33.4587C8.32491 33.502 7.28082 33.0538 6.23863 32.112C5.57346 31.5481 4.74146 30.5815 3.74475 29.2121C2.67537 27.7497 1.79619 26.054 1.10742 24.1207C0.369779 22.0325 0 20.0104 0 18.0528C0 15.8103 0.498564 13.8762 1.49718 12.2554C2.282 10.9536 3.3261 9.92663 4.63286 9.17273C5.93962 8.41884 7.35158 8.03466 8.87214 8.01008C9.70414 8.01008 10.7952 8.26021 12.1511 8.75179C13.5031 9.24502 14.3712 9.49515 14.7518 9.49515C15.0364 9.49515 16.0008 9.20268 17.6357 8.6196C19.1817 8.07886 20.4866 7.85497 21.5555 7.94316C24.4522 8.17036 26.6283 9.28014 28.0756 11.2795C25.485 12.8051 24.2035 14.9418 24.229 17.6829C24.2524 19.8179 25.0493 21.5946 26.6156 23.0054C27.3254 23.6601 28.1181 24.1661 29 24.5255C28.8087 25.0646 28.6068 25.581 28.3922 26.0767ZM21.7489 0.669421C21.7489 2.34288 21.1199 3.90538 19.866 5.35162C18.3529 7.07092 16.5227 8.0644 14.538 7.90764C14.5128 7.70687 14.4981 7.49557 14.4981 7.27354C14.4981 5.66702 15.2177 3.94773 16.4955 2.54197C17.1335 1.83021 17.9449 1.23839 18.9288 0.766291C19.9107 0.301231 20.8394 0.0440424 21.7128 0C21.7383 0.223715 21.7489 0.447445 21.7489 0.6694V0.669421Z" fill="white"/>
                              </svg>
                              <div class="ph3">
                                 <p class="white tl normal f4  ">Get it on</p>
                                 <p class="white fw7 f3 ">Apple store</p>
                              </div>
                          </div>
                       </a>
                       <a class="btn btn--green mb2" style="border-radius:8px;">
                          <div class="flex items-center pv1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                  <path d="M0.600275 1.06836C0.214668 1.52215 0 2.08037 0 2.67775V26.3226C0 26.8775 0.185847 27.3987 0.521514 27.8342L14.9689 14.4148L0.600275 1.06836Z" fill="white"/>
                                  <path d="M16.2917 13.1856L20.9786 8.8322L4.50361 0.361986C3.78855 -0.00573525 2.96814 -0.0929088 2.20264 0.098696L16.2917 13.1856Z" fill="white"/>
                                  <path d="M16.2919 15.6426L2.06042 28.8615C2.36727 28.9534 2.6848 28.9996 3.00258 28.9996C3.51813 28.9996 4.03393 28.8788 4.50376 28.6372L21.0973 20.1059L16.2919 15.6426Z" fill="white"/>
                                  <path d="M27.4985 12.1845L22.6819 9.70801L17.6149 14.4143L22.8002 19.2309L27.4985 16.8153C28.4387 16.3321 29 15.4663 29 14.4999C29 13.5332 28.4387 12.6677 27.4985 12.1845Z" fill="white"/>
                              </svg>
                              <div class="ph3">
                                 <p class="white tl normal f4  ">Get it on</p>
                                 <p class="white fw7 f3 ">Google Play</p>
                              </div>
                          </div>
                       </a>
                   </div>
                </div>
                <div>
                   <img src="~/assets/images/iPhone-space-gray.svg" alt="outline of an iphone" srcset="">
                </div>
            </div>
        </div> 
    </div>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    exploreLocations: [
      {
        location: 'Adenta',
        apartment: 311
      },
      {
        location: 'Sakumono',
        apartment: 309
      },
      {
        location: 'Achimota',
        apartment: 890
      },
      {
        location: 'Spintex',
        apartment: 908
      },
      {
        location: 'Haatso',
        apartment: 209
      },
      {
        location: 'Dansoman',
        apartment: 498
      },
      {
        location: 'Kasoa',
        apartment: 87
      },
      {
        location: 'Osu',
        apartment: 489
      }
    ]
  })
}
</script>

<style>

.find-location{
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('~assets/images/location-background.svg');
  border-radius: 8px;
  background-size: cover;
  padding:5rem;
}

.nearby-cards{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(18rem,1fr));
}



.home-banner{
  background: #EBF8F6;
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
