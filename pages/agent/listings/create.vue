<template>
  <div class="container">
    <div class="pv4">
      <h2 class="fw7 fs-normal dark lh-copy pv3">Add a new listing</h2>
      <div class="">
        <ul class="listing-multistep-ul flex flex-wrap">
          <li :class="[step === 1 ? 'active' : '']">
            <a><span class="rounded-listing mr2"></span>Listing overview</a>
          </li>
          <li :class="[step === 2 ? 'active' : '']">
            <a><span class="rounded-listing mr2"></span>Description</a>
          </li>
          <li :class="[step === 3 ? 'active' : '']">
            <a><span class="rounded-listing mr2"></span>Add images</a>
          </li>
          <li :class="[step === 4 ? 'active' : '']">
            <a><span class="rounded-listing mr2"></span>Price details</a>
          </li>
        </ul>
        <form class="listing-content" @submit.prevent="submitListing">
          <div
            v-show="step === 1"
            class="flex flex-column center w-60-ns w-70-l w-90-m w-90-s"
          >
            <h3 class="f5 dark lh-copy mb2">Listing Category</h3>
            <select v-model="categoryselected" class="mb4">
              <option value="" disabled>Select category</option>
              <option value="apartment">Apartment</option>
              <option value="event_center">Event center</option>
            </select>
            <h3 class="f5 dark lh-copy mb2">Listing title</h3>
            <input v-model="title" type="text" class="mb4" placeholder="" />
            <h3 class="f5 dark lh-copy mb2">Listing open for</h3>
            <div class="flex flex-wrap justify-between list-radio mb4">
              <div>
                <input
                  id="rent"
                  v-model="listtype"
                  type="radio"
                  value="rent"
                  name="listing-for"
                />
                <label for="rent">Rent</label>
              </div>
              <div>
                <input
                  id="shortlet"
                  v-model="listtype"
                  type="radio"
                  value="shortlet"
                  name="listing-for"
                />
                <label for="shortlet">Shortlet</label>
              </div>
              <div>
                <input
                  id="lease"
                  v-model="listtype"
                  type="radio"
                  value="lease"
                  name="listing-for"
                />
                <label for="lease">Lease</label>
              </div>
            </div>
            <h3 class="f5 dark lh-copy mb2">Listing address</h3>
            <div class="flex flex-wrap justify-between mb4">
              <div class="w-40-ns">
                <select v-model="regionselected" class="w-100-ns">
                  <option disabled value="">Select region</option>
                  <option v-for="(item, key) in regionOptions" :key="key">
                    {{ item }}
                  </option>
                </select>
              </div>
              <div class="w-40-ns">
                <select v-model="cityselected" class="w-100-ns">
                  <option disabled value="">Select city</option>
                  <option v-for="(item, key) in cityOptions" :key="key">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <div class="mb4">
              <textarea
                v-model="exactaddress"
                cols="30"
                rows="10"
                class="w-100"
                placeholder="Enter exact address"
              ></textarea>
            </div>

            <div class="center">
              <button class="btn btn--green" @click.prevent="next">
                Proceed
              </button>
            </div>

            <!-- <button class="btn btn--grey">Back</button> -->
          </div>
          <div
            v-show="step === 2"
            class="flex flex-column center w-60-ns w-70-l w-90-m w-90-s"
          >
            <h3 class="f5 dark lh-copy mb2">Listing Description</h3>
            <textarea
              v-model="description"
              cols="30"
              rows="10"
              class="w-100 mb4"
              placeholder="Write here"
            ></textarea>
            <div class="flex flex-wrap justify-between mb4">
              <div class="w-40-ns">
                <h3 class="f5 dark lh-copy mb2">No. of rooms</h3>
                <select v-model="roomselected" class="w-100-ns">
                  <option disabled value="">Select number</option>
                  <option v-for="(item, key) in roomOptions" :key="key">
                    {{ item }}
                  </option>
                </select>
              </div>
              <div class="w-40-ns">
                <h3 class="f5 dark lh-copy mb2">No. of bathrooms</h3>
                <select v-model="bathroomselected" class="w-100-ns">
                  <option disabled value="">Select number</option>
                  <option v-for="(item, key) in roomOptions" :key="key">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <div
              class="
                flex flex-wrap
                facilites
                justify-between
                pb4
                bb
                b--light-gray
              "
            >
              <div v-for="(facility, key) in facilities" :key="key">
                <div class="rounded-checkbox">
                  <input
                    :id="key"
                    v-model="apartmentoptions"
                    type="checkbox"
                    :value="facility"
                  />
                  <label :for="key"></label>
                  <span class="rounded-checkbox-text">{{ facility }}</span>
                </div>
              </div>
            </div>
            <div class="flex justify-between pv4">
              <button class="btn btn--green" @click.prevent="previous">
                Back
              </button>
              <button class="btn btn--green" @click.prevent="next">
                Proceed
              </button>
            </div>
          </div>
          <div
            v-show="step === 3"
            class="flex flex-column center w-60-ns w-70-l w-90-m w-90-s"
          >
            <h3 class="f5 dark lh-copy mb2">
              Upload clear images of your listing
            </h3>
            <h3 class="f5 grey--6 lh-copy mb2 fw4">
              Please ensure each image is not more than 5mb. Accepted format
              include JPEG and PNG
            </h3>

            <div class="pv4 bb b--light-gray">
              <ImageUpload @filesUploaded="getFiles($event)" />
            </div>
            <div class="flex justify-between pv4">
              <button class="btn btn--green mh3" @click.prevent="previous">
                Back
              </button>
              <button class="btn btn--green mh3" @click.prevent="next">
                Proceed
              </button>
            </div>
          </div>
          <div
            v-show="step === 4"
            class="flex flex-column center w-60-ns w-50-l w-70-m w-90-s"
          >
            <h3 class="f5 dark lh-copy mb2">Amount</h3>
            <div class="flex flex-wrap mb4">
              <div class="currency-label">
                <p class="white lh-copy fw7">GHS</p>
              </div>
              <input
                v-model="amount"
                class="input-unset"
                type="text"
                placeholder="Write listing price here"
              />
              <select v-model="period" class="select-unset">
                <option value="" disabled>Select duration</option>
                <option>yearly</option>
                <option>monthly</option>
              </select>
            </div>
            <h3 class="f5 dark lh-copy mb2">Advance payment duration</h3>
            <select v-model="paymentduration" class="mb4">
              <option value="" disabled>Select one</option>
              <option value="">1 year</option>
              <option value="">2 years</option>
              <option value="">3 years</option>
              <option value="">4 years</option>
            </select>

            <div class="flex justify-between pv5 bt b--light-gray">
              <button class="btn btn--green" @click.prevent="previous">
                Back
              </button>
              <button class="btn btn--green">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddListing",
  middleware: "auth",
  data() {
    return {
      title: null,
      exactaddress: null,
      listtype: null,
      description: null,
      amount: null,
      period: "",
      regionselected: "",
      cityselected: "",
      roomselected: "",
      bathroomselected: "",
      paymentduration: "",
      categoryselected: "",
      step: 1,
      regionOptions: ["Greater Accra", "Ashanti"],
      cityOptions: ["Accra", "Kumasi", "Weija", "Osu", "Labone"],
      roomOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      apartmentoptions: [],
      facilities: [
        "A kitchen",
        "Furnished living room",
        "Home cleaning",
        "Parking space",
        "Personal ECG prepaid meter",
        "Newly built",
        "Home cleaning services",
        "Walled apartment",
        "Wifi services",
        "Sitting room",
      ],
      images: null,
    };
  },
  computed: {
    user() {
      return this.$auth.$storage.getUniversal("user");
    },
  },
  created() {
    // this.$auth.$storage.removeUniversal("user");
  },
  methods: {
    next() {
      this.step++;
    },
    previous() {
      this.step--;
    },
    getFiles(files) {
      this.images = files;
    },
    async submitListing() {
      try {
        const user = this.$auth.$storage.getUniversal("user");
        const user_id = user.profile.id;
        const token = "Bearer " + user.token;

        let data = new FormData();

        data.append("category", this.categoryselected);
        data.append("title", this.title);
        data.append("listing_type", this.listtype);
        data.append("region", this.regionselected);
        data.append("city", this.cityselected);
        data.append("address", this.exactaddress);
        data.append("description", this.description);
        data.append("amount", this.amount);
        data.append("period", this.period);
        data.append("number_of_rooms", this.roomselected);
        data.append("number_of_bathrooms", this.bathroomselected);
        data.append("user_id", user_id);
        data.append("amenities[]", this.apartmentoptions);
        data.append("images[]", this.images);
        
        this.$axios.setHeader("Authorization", token);
        this.$axios.setHeader("Content-Type", "multipart/form-data");

        const response = await this.$axios.post(
          "property-listing/create",
          data
        );

        this.$router.push("agent/listings");
      } catch (err) {
        console.log("error", err);
      }
    },
  },
};
</script>
<style>
.select-unset {
  border-radius: unset;
  /* border-left: none; */
  flex: 1;
}

.input-unset {
  border-radius: unset;
  flex: 1;
}

.currency-label {
  padding: 0.8rem;
  background: #07a287;
  border-radius: 8px 0px 0px 8px;
  cursor: pointer;
}
</style>
