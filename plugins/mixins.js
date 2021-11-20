import Vue from "vue";

const mixin = {
  methods: {
    async getLocation() {
      try {
        const locations = await this.$axios.$get(`locations`);
        console.log("locstion", locations.data);
        // console.log("location value", this.locationValue);
      } catch (error) {
        console.log("error-location", error);
        // console.log("location value", this.locationOption);
      }
    },
  },
};

Vue.mixin(mixin);
