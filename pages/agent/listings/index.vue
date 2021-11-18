<template>
  <div>
    <div class="homepage-container">
      <div class="listing-wrapper pv4">
        <div class="ba b--light-gray br3">
          <div class="flex flex-column pa4">
            <div class="center pt4 pb3">
              <img
                src="~/assets/images/short-stays.svg"
                class="profile-image"
              />
            </div>
            <h3 class="fw7 dark tc mv1">{{ agent.name }}</h3>
            <h3 class="fw4 grey--6 tc mb2 f5">{{ agent.phone }}</h3>
            <p class="lh-copy fw4 grey--5 tc mb2 pb3 f6">
              No 56, Numo Arkansas Close, Ahinsan, Kasoa, Accra, Ghana.
            </p>
            <div class="pv4 bb bt b--light-gray">
              <div class="flex mb2 justify-between">
                <span class="fw7 grey--5 lh-copy">Total lisitings</span>
                <span class="grey--6 lh-copy normal">{{ totalListing }}</span>
              </div>
              <div class="flex mb2 justify-between">
                <span class="fw7 grey--5 lh-copy">Email</span>
                <span class="grey--6 lh-copy normal">{{ agent.email }}</span>
              </div>
              <div class="flex mb2 justify-between">
                <span class="fw7 grey--5 lh-copy">Member Since</span>
                <span class="grey--6 lh-copy normal">{{ memberSince }}</span>
              </div>
            </div>
            <div class="pv4 bb b--light-gray">
              <!-- <p class="f3 fw7 dark mb2">
                4.5 <span class="f6 grey--5 fw5">/5.0</span>
              </p> -->
              <!-- <p class="f6 dark mb2">based on 120 reviews</p> -->
            </div>
            <div class="pv4 bb b--light-gray">
              <h4 class="f6 grey--5 mb2">About</h4>
              <p class="f6 grey--5 lh-copy normal mb2">
                <!-- We have thousands of villas, apartments and townhouses for sale.
                Search through verified, hand-selected properties in Accra. Sign
                Up Online. Verified Properties. Manage Viewings. Highlights: No
                Extra Cost, Chat Option Available, Virtual Tours Available. -->
              </p>
            </div>
            <div class="pv4 tc">
              <nuxt-link to="/list-property" class="btn btn--green"
                >Edit Profile Information</nuxt-link
              >
            </div>
          </div>
        </div>
        <div>
          <h2 class="dark fw7 pb3 bb b--light-gray f4">Listings</h2>
          <div class="pv4 flex">
            <div class="ml-auto">
              <nuxt-link
                to="listings/create"
                class="btn btn--green ml-auto"
                >+ Add new</nuxt-link
              >
            </div>
          </div>
          <div v-if="listing.length !== 0">
            <div class="flex flex-wrap">
              <nuxt-link
                v-for="list in listing"
                :key="list.title"
                :to="`/list-property/${list.id}`"
                class="flex flex-column ph3 mb3 cursor text-underline-none"
              >
                <div class="pv3">
                  <img
                    :src="require(`~/assets/images/apartment.svg`)"
                    alt=""
                    srcset=""
                  />
                </div>
                <h3 class="dark fs-normal fw7 pv3 mw5">{{ list.title }}</h3>
                <ul class="flex flex-wrap featured-prop-ul">
                  <li>
                    <p>{{ list.city }}</p>
                  </li>
                  <!-- <li v-for="(utility, key) in residence.utilities" :key="key">
                <p><span class="rounded-grey-dot"></span>{{ utility }}</p>
              </li> -->
                  <li>
                    <p>
                      <span class="rounded-grey-dot"></span
                      >{{ list.number_of_rooms }} bedroom(s)
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="rounded-grey-dot"></span
                      >{{ list.number_of_bathrooms }} bathroom(s)
                    </p>
                  </li>
                </ul>
                <h3 class="pv2 green">
                  GHS {{ list.amount }}
                  <span class="grey--4 f6">{{ list.period }}</span>
                </h3>
              </nuxt-link>
            </div>
          </div>
          <div v-if="isLoading" class="pv4 flex items-center">
            <LoadingGear />
          </div>
          <div
            v-if="listing.length === 0 && isLoading !== true"
            class="flex flex-column items-center pv6"
          >
            <div>
              <div class="tc">
                <img src="~/assets/images/add-listing-empty-state.svg" />
              </div>

              <p class="lh-copy grey--5 fw7 f4 mv2 tc">
                You have not created a listing yet
              </p>
              <p class="grey--6 lh-copy fw4 mv2 tc">
                Click the button below to add a new listing.
              </p>
            </div>

            <div class="pv3 tc">
              <nuxt-link to="listings/create" class="btn btn--green"
                >+ Add new listing</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer :is-background="true" />
  </div>
</template>
<script>
export default {
  name: "Listing",
  middleware: "auth",
  data() {
    return {
      listing: [],
      isLoading: false,
    };
  },
  computed: {
    agent() {
      const agent = this.$auth.$storage.getUniversal("user").profile;
      return agent;
    },
    totalListing() {
      return this.listing.length;
    },
    memberSince() {
      const datecreated = this.agent.created_at;
      const date = new Date(datecreated).toDateString();

      return date;
    },
  },
  created() {
    // this.$auth.$storage.removeUniversal("user");
    this.getListing();
  },
  methods: {
    async getListing() {
      try {
        this.isLoading = true;
        const user = this.$auth.$storage.getUniversal("user");
        const token = "Bearer " + user.token;
        this.$axios.setHeader("Authorization", token);
        // this.$axios.setHeader("Content-Type", "application/json");
        const response = await this.$axios.$get("property-listing/agent");
        this.listing = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
<style>
/* .listing-wrapper{
    display: grid;
    grid-template-columns: fit-content(20ch) minmax(min(50vw , 30ch) , 1fr);
    grid-gap: 2rem;
  } */
.listing-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.listing-wrapper > :first-child {
  flex-basis: 25rem;
  flex-grow: 1;
}

.listing-wrapper > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-width: 50%;
}

.profile-image {
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}
</style>
