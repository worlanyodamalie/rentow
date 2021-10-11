<template>
  <div>
    <div class="homepage-container">
      <div class="flex justify-center flex-wrap-ms">
        <div>
          <h1 class="lh-copy fs-normal fw7 f1 green mw7-ns pt4">
            You will find your perfect space here
          </h1>
          <h3 class="lh-copy normal fs-normal fw3 dark mw6-ns">
            Search for apartments based on your unique needs and your next home
            will be right in front of you.
          </h3>
        </div>
        <div class="dn-xs">
          <div>
            <!-- <img class="heroimage" src="~/assets/images/hero-image-411w.svg" alt="" srcset=""> -->
            <HeroImage />
          </div>
        </div>
      </div>
      <div class="homepage-search-wrapper w-90-ns dn-xs center">
        <SearchFilter />
      </div>
      <div class="bb b--light-gray flex pv3 w-90-ns center"></div>
      <div class="flex flex-column w-90-ns center">
        <h2 class="f2 pv5 dark fw7 fs-normal">Explore nearby</h2>
        <div class="nearby-cards">
          <div
            v-for="item in exploreLocations"
            :key="item.location"
            class="flex items-center pb5"
          >
            <div>
              <DefaultLocation />
            </div>
            <div class="ph3">
              <p class="fw7 fs-normal green f4 lh-copy">{{ item.location }}</p>
              <p class="lh-copy fs-normal fw4 grey--4">
                {{ item.apartment }} apartment(s)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-column w-90-ns center">
        <h2 class="f2 pv5 dark fw7 fs-normal">Designed to meet your needs</h2>
        <div class="designed-meet-needs pb4">
          <div class="flex flex-column">
            <div>
              <img
                class="responsive"
                src="~/assets/images/entire-homes.svg"
                alt=""
                srcset=""
              />
            </div>
            <h3 class="dark fs-normal fw7 pv3">Entire homes</h3>
          </div>
          <div class="flex flex-column">
            <div>
              <img
                class="responsive"
                src="~/assets/images/short-stays.svg"
                alt=""
                srcset=""
              />
            </div>
            <h3 class="dark fs-normal fw7 pv3">Short stays</h3>
          </div>
          <div class="flex flex-column">
            <div>
              <img
                class="responsive"
                src="~/assets/images/newly-built-homes.svg"
                alt=""
                srcset=""
              />
            </div>
            <h3 class="dark fs-normal fw7 pv3">Newly built homes</h3>
          </div>
        </div>
        <ListingBanner>
          <h3 class="f2 fw7 fs-normal lh-copy white mw6-ns">
            Not sure which location to choose? We got you.
          </h3>
        </ListingBanner>
        <h2 class="f2 pv5 dark fw7 fs-normal">Featured properties</h2>
        <FeaturedProperty />
        <AppBanner />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data: () => ({
    exploreLocations: [
      {
        location: "Adenta",
        apartment: 311,
      },
      {
        location: "Sakumono",
        apartment: 309,
      },
      {
        location: "Achimota",
        apartment: 890,
      },
      {
        location: "Spintex",
        apartment: 908,
      },
      {
        location: "Haatso",
        apartment: 209,
      },
      {
        location: "Dansoman",
        apartment: 498,
      },
      {
        location: "Kasoa",
        apartment: 87,
      },
      {
        location: "Osu",
        apartment: 489,
      },
    ],
  }),
};
</script>

<style>
.nearby-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
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
