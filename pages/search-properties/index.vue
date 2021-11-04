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
          <SearchFilter :show-button="true" :is-filter="true" />
        </div>
        <div>
          <toggleButton toggle-text="Show Map" @toggled="getToggleValue" />
        </div>
      </div>
      <div class="search-results-wrapper">
        <div>
          <div class="flex flex-wrap">
            <div
              v-for="residence in residential"
              :key="residence.title"
              class="flex flex-column ph3 pb3"
            >
              <div class="pv3">
                <img
                  :src="require(`~/assets/images/${residence.image}`)"
                  style="width: 20rem"
                />
              </div>
              <h3 class="dark fs-normal fw7 pv3">{{ residence.title }}</h3>
              <ul class="flex flex-wrap featured-prop-ul">
                <li>
                  <p>{{ residence.location }}</p>
                </li>
                <li v-for="(utility, key) in residence.utilities" :key="key">
                  <p><span class="rounded-grey-dot"></span>{{ utility }}</p>
                </li>
              </ul>
              <h3 class="pv2 green">
                GHS {{ residence.price }}
                <span class="grey--4 f6">per month</span>
              </h3>
            </div>
          </div>
        </div>
        <div v-if="showMap">
          <img src="~/assets/images/filter-map.png" alt="" />
        </div>
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
      residential: [
        {
          image: "apartment.svg",
          location: "Achimota",
          price: 6000,
          title: "A mini self contain apartment",
          utilities: ["1 bedroom", "1 bathroom"],
        },
        {
          image: "apartment.svg",
          location: "Achimota",
          price: 6000,
          title: "One bedroom apartment",
          utilities: ["1 bedroom", "1 bathroom"],
        },
        {
          image: "apartment.svg",
          location: "Achimota",
          price: 6000,
          title: "Two bedroom apartment",
          utilities: ["2 bedroom", "1 bathroom"],
        },
        {
          image: "apartment.svg",
          location: "Achimota",
          price: 6000,
          title: "A self contain apartment",
          utilities: ["1 bedroom", "1 bathroom"],
        },
        {
          image: "apartment.svg",
          location: "Achimota",
          price: 6000,
          title: "Three bedroom apartment",
          utilities: ["3 bedroom", "2 bathroom"],
        },
        {
          image: "apartment.svg",
          location: "Achimota",
          price: 6000,
          title: "Four bedroom apartment",
          utilities: ["4 bedroom", "3 bathroom"],
        },
      ],
      showMap: false,
    };
  },
  methods: {
    getToggleValue(value) {
      this.showMap = value;
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
