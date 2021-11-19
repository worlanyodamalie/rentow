<template>
  <div>
    <div class="bb b--light-gray pb3">
      <ul class="flex property-nav justify-center">
        <li :class="[title === 'Apartment' ? 'active' : '']">
          <a @click="title = 'Apartment'">Residential property</a>
        </li>
        <li :class="[title === 'event_center' ? 'active' : '']">
          <a @click="title = 'event_center'">Event Center</a>
        </li>
        <!-- <li :class="[title === 'industrial' ? 'active' : '']">
          <a @click="title = 'industrial'">Industrial property</a>
        </li> -->
      </ul>
    </div>
    <div class="pv3">
      <div v-if="title === 'Apartment'">
        <div class="flex flex-wrap justify-center">
          <div
            v-for="residence in residential"
            :key="residence.title"
            class="flex flex-column ph3 pb3"
          >
            <div class="pv3">
              <img
                :src="require(`~/assets/images/${residence.image}`)"
                alt=""
                srcset=""
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
      <div v-if="title === 'event_center'"></div>
      <!-- <div v-if="title === 'industrial'">
        <p>Industrial</p>
      </div> -->
      <div class="pv5 flex justify-center">
        <nuxt-link class="btn btn--green" to="/search-properties"
          >View all properties</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Apartment",
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
    };
  },
  watch: {
    title() {
      this.getFeaturedProperty();
    },
  },
  created() {
    this.getFeaturedProperty();
  },
  methods: {
    async getFeaturedProperty() {
      try {
        const user = this.$auth.$storage.getUniversal("user");
        const token = "Bearer " + user.token;
        this.$axios.setHeader("Authorization", token);
        const response = await this.$axios.$get(
          `home/listings?category=${this.title}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="css">
.property-nav {
  padding: 0;
  list-style: none;
  /* overflow-x:auto; */
}

.property-nav > li {
  padding: 0 1rem;
}

.property-nav > li > a {
  text-decoration: none;
  color: var(--grey--4);
  font-weight: 500;
  font-style: normal;
  font-size: 1rem;
  cursor: pointer;
}

.property-nav > li.active > a {
  color: var(--green);
  font-weight: 700;
  padding-bottom: 1rem;
  border-bottom: 4px solid #07a287;
}

.featured-prop-ul {
  padding: 0;
}

.featured-prop-ul {
  list-style: none;
}

/* .featured-prop-ul > li:first-child {
          list-style: none;
   } */
.rounded-grey-dot {
  border-radius: 50%;
  background: #c3c7ce;
  width: 1px;
  height: 1px;
  padding: 3px;
  display: inline-block;
  margin-right: 4px;
  vertical-align: middle;
}

.featured-prop-ul > li > p {
  color: #c3c7ce;
  font-size: 0.95rem;
}

.featured-prop-ul > li:not(:first-child) {
  padding: 0 0.7rem;
}

@media screen and (max-width: 29em) {
  .property-nav {
    overflow-x: auto;
  }
}
</style>
