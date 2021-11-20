<template>
  <div>
    <div class="homepage-container">
      <div
        class="
          flex flex-wrap
          justify-between
          filter-wrapper
          items-center
          bb
          b--light-gray
          pt2
          pb4
        "
      >
        <div>
          <SearchFilter :is-filter="true" @queryparams="fetchevent" />
        </div>
        <!-- <div>
          <toggleButton toggle-text="Show Map" @toggled="getToggleValue" />
        </div> -->
      </div>
      <div
        v-if="isSearching"
        class="loadingSvg w-20 pv4"
        style="position: relative; margin: auto; left: 0"
      >
        <LoadingCircle />
      </div>
      <div
        v-if="
          (listings === null || listings.length === 0) && isSearching !== true
        "
        class="flex flex-column items-center mv5"
      >
        <div class="w-20">
          <img
            src="~/assets/images/listing-empty-state.svg"
            alt="search results not found"
          />
        </div>
        <h2 class="lh-copy grey--5 fw7 f4 pv3">Listing not found</h2>
      </div>
      <div
        class="search-results-wrapper"
        :class="isSearching === true ? 'o-05' : ''"
      >
        <div>
          <div class="flex flex-wrap pv3" style="column-gap: 1rem">
            <nuxt-link
              v-for="listing in listings"
              :key="listing.title"
              :to="`/properties/${listing.user_id}`"
              class="text-underline-none"
            >
              <div class="flex flex-column ph3 pb3">
                <div class="pv3">
                  <img
                    v-if="listing.images.length === 0"
                    :src="require(`~/assets/images/apartment.svg`)"
                    style="width: 20rem"
                  />
                  <img
                    v-if="listing.images[0].path !== 0"
                    :src="listing.images[0].path"
                    class="br3"
                    style="width: 20rem"
                  />
                </div>
                <h3 class="dark fs-normal fw7 pv3">{{ listing.title }}</h3>
                <ul class="flex flex-wrap featured-prop-ul">
                  <li>
                    <p>{{ listing.city }}</p>
                  </li>
                  <li>
                    <p>
                      <span class="rounded-grey-dot"></span
                      >{{ listing.number_of_rooms }} bedroom(s)
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="rounded-grey-dot"></span
                      >{{ listing.number_of_bathrooms }} bathroom(s)
                    </p>
                  </li>
                </ul>
                <h3 class="pv2 green">
                  GHS {{ listing.amount }}
                  <span class="grey--4 f6">{{ listing.period }}</span>
                </h3>
              </div>
            </nuxt-link>
          </div>
        </div>
        <!-- <div v-if="showMap">
          <img src="~/assets/images/filter-map.png" alt="" />
        </div> -->
      </div>
    </div>
    <Footer :is-background="true" />
  </div>
</template>
<script>
export default {
  name: "SearchProperties",
  data() {
    return {
      // residential: [
      //   {
      //     image: "apartment.svg",
      //     location: "Achimota",
      //     price: 6000,
      //     title: "A mini self contain apartment",
      //     utilities: ["1 bedroom", "1 bathroom"],
      //   },
      //   {
      //     image: "apartment.svg",
      //     location: "Achimota",
      //     price: 6000,
      //     title: "One bedroom apartment",
      //     utilities: ["1 bedroom", "1 bathroom"],
      //   },
      //   {
      //     image: "apartment.svg",
      //     location: "Achimota",
      //     price: 6000,
      //     title: "Two bedroom apartment",
      //     utilities: ["2 bedroom", "1 bathroom"],
      //   },
      //   {
      //     image: "apartment.svg",
      //     location: "Achimota",
      //     price: 6000,
      //     title: "A self contain apartment",
      //     utilities: ["1 bedroom", "1 bathroom"],
      //   },
      //   {
      //     image: "apartment.svg",
      //     location: "Achimota",
      //     price: 6000,
      //     title: "Three bedroom apartment",
      //     utilities: ["3 bedroom", "2 bathroom"],
      //   },
      //   {
      //     image: "apartment.svg",
      //     location: "Achimota",
      //     price: 6000,
      //     title: "Four bedroom apartment",
      //     utilities: ["4 bedroom", "3 bathroom"],
      //   },
      // ],
      listings: [],
      showMap: false,
      isSearching: false,
    };
  },
  created() {
    this.fetchSearch(this.$route.query);
  },
  methods: {
    getToggleValue(value) {
      this.showMap = value;
    },
    async fetchSearch(query) {
      try {
        console.log("params", query);
        let params = query ? query : this.$route.query;
        this.$router.push(
          `/search-properties?category=${params.category}&location=${params.location}&from_amount=${params.from_amount}&to_amount=${params.to_amount}`
        );

        this.isSearching = true;
        const response = await this.$axios.get(
          `listing/search?location=${params.location}&category=${params.category}&from_amount=${params.from_amount}&to_amount=${params.to_amount}`
        );
        this.isSearching = false;
        // this.listings.length = 0;
        this.listings = response.data.data;
        console.log("results", response.data);
      } catch (error) {
        this.isSearching = false;
        console.log(error);
      }
    },
    fetchevent($event) {
      console.log("fetched", $event);
      this.fetchSearch($event);
    },
  },
};
</script>
<style>
.filter-wrapper > div:first-child {
  flex: 0 0 80%;
}

.search-results-wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
}

/* .filter-wrapper > div:last-child {
  flex: 0 0 25%;
} */
</style>
