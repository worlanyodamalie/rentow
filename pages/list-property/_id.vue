<template>
  <div>
    <div class="homepage-container">
      <div class="pv4">
        <nuxt-link to="/list-property" class="btn btn--grey-outline">
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-right: 1.5px"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.36228 10.0002C5.10028 10.0002 4.83928 9.89825 4.64328 9.69525L0.780284 5.69525C0.402284 5.30225 0.407284 4.67925 0.793284 4.29325L4.79328 0.29325C5.18328 -0.09775 5.81628 -0.09775 6.20728 0.29325C6.59728 0.68425 6.59728 1.31625 6.20728 1.70725L2.90228 5.01225L6.08128 8.30525C6.46528 8.70325 6.45428 9.33625 6.05728 9.71925C5.86228 9.90725 5.61228 10.0002 5.36228 10.0002Z"
              fill="#757D8A"
            />
          </svg>

          Back</nuxt-link
        >
      </div>
      <div class="details-header mb4"></div>
      <div class="pv4 flex flex-wrap details-section justify-between">
        <div>
          <div class="flex flex-column">
            <h3 class="dark fs-normal fw7 pv3 f3">
              {{ listing.title }}
            </h3>
            <ul class="flex flex-wrap featured-prop-ul">
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
            <h5 class="mv3 green fw7 f5">
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                style="margin-right: 3px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.33321 6.63835C5.75891 6.63835 5.29154 6.17099 5.29154 5.59668C5.29154 5.02237 5.75891 4.55501 6.33321 4.55501C6.90752 4.55501 7.37488 5.02237 7.37488 5.59668C7.37488 6.17099 6.90752 6.63835 6.33321 6.63835ZM6.33314 3.16504C4.99287 3.16504 3.90259 4.25532 3.90259 5.59559C3.90259 6.93587 4.99287 8.02615 6.33314 8.02615C7.67342 8.02615 8.7637 6.93587 8.7637 5.59559C8.7637 4.25532 7.67342 3.16504 6.33314 3.16504ZM6.33321 12.642C5.17002 11.542 2.16654 8.45378 2.16654 5.88919C2.16654 3.62183 4.03529 1.77669 6.33321 1.77669C8.63113 1.77669 10.4999 3.62183 10.4999 5.88919C10.4999 8.45378 7.49641 11.542 6.33321 12.642ZM6.33326 0.388672C3.27007 0.388672 0.77771 2.85603 0.77771 5.89006C0.77771 9.69214 5.67285 13.931 5.88118 14.1095C6.01174 14.2213 6.17215 14.2776 6.33326 14.2776C6.49438 14.2776 6.65479 14.2213 6.78535 14.1095C6.99368 13.931 11.8888 9.69214 11.8888 5.89006C11.8888 2.85603 9.39646 0.388672 6.33326 0.388672Z"
                  fill="#07A287"
                />
              </svg>
              {{ listing.city }}
            </h5>
            <p class="mv3 lh-copy fw4 dark">
              In a beautiful small room in a ceiling apartment in
              3-flat-building, you will feel at home for some time. We welcome
              you and are happy to have you there. The flat is located very
              close to the university of Regensburg and the OTH, you have a 15
              minute walk and you are in the city centre. In the flat there are
              2 more rooms for rental (also available on AirBnB). Every room is
              completely furnished, including bed sheets, duvets and towels. The
              bathroom and the kitchen are for common use.
            </p>
            <p class="mv3 lh-copy fw4 dark">
              Every room is completely furnished, including bed sheets, duvets
              and towels. The bathroom and the kitchen are for common use...
            </p>
            <a class="green fw7 cursor mv3">
              Show more
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="v-mid"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.75005 14.1667C8.53671 14.1667 8.32338 14.085 8.16088 13.9225C7.83505 13.5967 7.83505 13.07 8.16088 12.7442L10.915 9.99004L8.26505 7.24588C7.94588 6.91421 7.95505 6.38671 8.28588 6.06754C8.61755 5.74838 9.14505 5.75754 9.46421 6.08754L12.6825 9.42088C12.9984 9.74838 12.9942 10.2675 12.6725 10.5892L9.33921 13.9225C9.17671 14.085 8.96338 14.1667 8.75005 14.1667Z"
                  fill="#07A287"
                />
              </svg>
            </a>
            <h2 class="bt b--light-gray pv4 dark fw7 f3">
              What this place offers
            </h2>
            <div class="flex flex-wrap justify-between place-offers">
              <div v-for="(facility, key) in facilities" :key="key">
                <p class="dark lh-copy normal">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    class="v-mid mr1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="8"
                        y1="0"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#08B395" />
                        <stop offset="1" stop-color="#0C977F" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {{ facility }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="details-card pa4 flex flex-column">
            <h1 class="pv2 green fw7 mb1">
              GHS 6000
              <span class="green f6">per month</span>
            </h1>
            <p class="grey--5 fw4 lh-copy f6 bb b--light-gray pb3">
              Price is 10% cheaper than the average in this area
            </p>
            <p class="mv3 dark fw7 lh-copy grey--5">Marketed By:</p>
            <div class="flex flex-wrap pv3 items-center">
              <div class="pr4">
                <img
                  class="agent-profile-img"
                  src="~/assets/images/image-placeholder.svg"
                />
              </div>
              <div>
                <h2 class="lh-copy fw7 dark f5 mb1">Etornam & Sons Property</h2>
                <p class="fw4 grey--6 lh-copy f6">Posted 238 properties</p>
              </div>
            </div>
            <div class="flex flex-wrap pb4">
              <div class="pr3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style="vertical-align: text-bottom"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2539 6.99536L9.10055 11.1362L7.73971 9.39786C7.45638 9.03452 6.93138 8.97119 6.56971 9.25536C6.20721 9.53869 6.14305 10.0629 6.42721 10.4245L8.45305 13.0137C8.61138 13.2154 8.85305 13.3329 9.10971 13.3329H9.11555C9.37305 13.332 9.61638 13.2104 9.77221 13.0045L13.5797 8.00452C13.8589 7.63786 13.788 7.11619 13.4214 6.83702C13.0539 6.55786 12.5322 6.62952 12.2539 6.99536ZM10 16.6667C6.32417 16.6667 3.33333 13.6758 3.33333 10C3.33333 6.32417 6.32417 3.33333 10 3.33333C13.6758 3.33333 16.6667 6.32417 16.6667 10C16.6667 13.6758 13.6758 16.6667 10 16.6667ZM10.0001 1.66602C5.39758 1.66602 1.66675 5.39768 1.66675 9.99935C1.66675 14.601 5.39758 18.3327 10.0001 18.3327C14.6026 18.3327 18.3334 14.601 18.3334 9.99935C18.3334 5.39768 14.6026 1.66602 10.0001 1.66602Z"
                    fill="#07A287"
                    fill-opacity="0.64"
                  />
                </svg>
                <span class="green fw7 f6" style="opacity: 64%">
                  Identity verified
                </span>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style="vertical-align: text-bottom"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3333 9.16667H10.8333V6.66667C10.8333 6.20583 10.46 5.83333 10 5.83333C9.54 5.83333 9.16667 6.20583 9.16667 6.66667V10C9.16667 10.4608 9.54 10.8333 10 10.8333H13.3333C13.7942 10.8333 14.1667 10.4608 14.1667 10C14.1667 9.53917 13.7942 9.16667 13.3333 9.16667ZM10 16.6667C6.32417 16.6667 3.33333 13.6758 3.33333 10C3.33333 6.32417 6.32417 3.33333 10 3.33333C13.6758 3.33333 16.6667 6.32417 16.6667 10C16.6667 13.6758 13.6758 16.6667 10 16.6667ZM10.0001 1.66602C5.40508 1.66602 1.66675 5.40435 1.66675 9.99935C1.66675 14.5943 5.40508 18.3327 10.0001 18.3327C14.5951 18.3327 18.3334 14.5943 18.3334 9.99935C18.3334 5.40435 14.5951 1.66602 10.0001 1.66602Z"
                    fill="#07A287"
                    fill-opacity="0.64"
                  />
                </svg>

                <span class="green fw7 f6" style="opacity: 64%">
                  100% response rate
                </span>
              </div>
            </div>
            <div>
              <p class="pt4 bt b--light-gray fw7 grey--5 mb2">Reviews</p>
              <div>
                <p class="grey--5 fw4 lh-copy f6">
                  Etornam and his sons are super people who aren’t from this
                  planet. They make apartment search so easy. Apartments are as
                  they are in the pictures. They also remove an apartment from
                  here once it is rented out. I love their services.
                </p>
              </div>
              <div class="flex pv3">
                <a class="cursor mr2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 8.25H7.752L8.6895 7.2675C8.97525 6.96825 8.964 6.4935 8.66475 6.207C8.36475 5.922 7.89075 5.9325 7.60425 6.2325L5.457 8.4825C5.4285 8.5125 5.41575 8.55 5.3925 8.58375C5.36175 8.628 5.32725 8.6685 5.307 8.7195C5.27925 8.78775 5.27025 8.859 5.26425 8.93175C5.262 8.955 5.25 8.976 5.25 9C5.25 9.0015 5.25075 9.00225 5.25075 9.00375C5.2515 9.10125 5.27025 9.198 5.3085 9.2895C5.346 9.38025 5.4015 9.462 5.46975 9.531L7.71975 11.7803C7.866 11.9265 8.058 12 8.25 12C8.442 12 8.634 11.9265 8.78025 11.7803C9.0735 11.487 9.0735 11.013 8.78025 10.7198L7.8105 9.75H12C12.414 9.75 12.75 9.414 12.75 9C12.75 8.586 12.414 8.25 12 8.25ZM9 15C5.69175 15 3 12.3082 3 9C3 5.69175 5.69175 3 9 3C12.3082 3 15 5.69175 15 9C15 12.3082 12.3082 15 9 15ZM9 1.5C4.8645 1.5 1.5 4.8645 1.5 9C1.5 13.1355 4.8645 16.5 9 16.5C13.1355 16.5 16.5 13.1355 16.5 9C16.5 4.8645 13.1355 1.5 9 1.5Z"
                      fill="#07A287"
                      fill-opacity="0.45"
                    />
                  </svg>
                </a>
                <a class="cursor">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7492 9.00405C12.7492 9.00255 12.75 9.0018 12.75 9.0003C12.75 8.97555 12.738 8.9553 12.7358 8.9313C12.7297 8.8593 12.7207 8.7873 12.693 8.7198C12.6727 8.6688 12.6383 8.6283 12.6075 8.5833C12.5843 8.5503 12.5715 8.51205 12.543 8.48205L10.3958 6.23205C10.1093 5.93205 9.63525 5.92155 9.33525 6.2073C9.036 6.49305 9.02475 6.9678 9.3105 7.2678L10.248 8.2503H6C5.586 8.2503 5.25 8.58555 5.25 9.0003C5.25 9.4143 5.586 9.7503 6 9.7503H10.1895L9.21975 10.7201C8.9265 11.0126 8.9265 11.4873 9.21975 11.7806C9.366 11.9268 9.558 12.0003 9.75 12.0003C9.942 12.0003 10.134 11.9268 10.2802 11.7806L12.5302 9.53055C12.5985 9.4623 12.654 9.3798 12.6915 9.28905C12.7297 9.1983 12.7485 9.10155 12.7492 9.00405ZM9 15C5.69175 15 3 12.3082 3 9C3 5.69175 5.69175 3 9 3C12.3082 3 15 5.69175 15 9C15 12.3082 12.3082 15 9 15ZM9 1.5C4.8645 1.5 1.5 4.8645 1.5 9C1.5 13.1355 4.8645 16.5 9 16.5C13.1355 16.5 16.5 13.1355 16.5 9C16.5 4.8645 13.1355 1.5 9 1.5Z"
                      fill="#07A287"
                      fill-opacity="0.45"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div v-if="isAdmin" class="flex bt b--light-gray pt4">
              <a class="btn btn--green-outline cursor mr3">Flag</a>
              <button class="btn btn--green">Approve property</button>
            </div>
          </div>
        </div>
      </div>
      <h2 class="bt b--light-gray pv4 dark fw7 f3">Property Location</h2>
      <div class="map-location"></div>
      <div class="pv5 flex flex-wrap justify-between location-description">
        <div>
          <h4 class="fw7 grey--6">Achimota Overhead</h4>
          <p class="pv4 lh-copy fw4 dark">
            The neighborhood is very quiet. There are many little houses with
            very nice people. There is no traffic at all on your way to Accra.
            Only People who live there drive on the streets around, so the
            silence is guaranteed...
          </p>
          <a class="green fw7 cursor mv3">
            Show more
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              class="v-mid"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.75005 14.1667C8.53671 14.1667 8.32338 14.085 8.16088 13.9225C7.83505 13.5967 7.83505 13.07 8.16088 12.7442L10.915 9.99004L8.26505 7.24588C7.94588 6.91421 7.95505 6.38671 8.28588 6.06754C8.61755 5.74838 9.14505 5.75754 9.46421 6.08754L12.6825 9.42088C12.9984 9.74838 12.9942 10.2675 12.6725 10.5892L9.33921 13.9225C9.17671 14.085 8.96338 14.1667 8.75005 14.1667Z"
                fill="#07A287"
              />
            </svg>
          </a>
        </div>
        <div>
          <h4 class="fw7 grey--6">Marketer:</h4>
          <div class="flex flex-wrap pv4 items-center">
            <div class="pr4">
              <img
                class="agent-profile-img"
                src="~/assets/images/image-placeholder.svg"
              />
            </div>
            <div>
              <h2 class="lh-copy fw7 dark f5 mb1">Etornam & Sons Property</h2>
              <p class="fw4 grey--6 lh-copy f6">Posted 238 properties</p>
            </div>
          </div>
          <a class="green fw7 cursor mv3">
            View other properties
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              class="v-mid"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.75005 14.1667C8.53671 14.1667 8.32338 14.085 8.16088 13.9225C7.83505 13.5967 7.83505 13.07 8.16088 12.7442L10.915 9.99004L8.26505 7.24588C7.94588 6.91421 7.95505 6.38671 8.28588 6.06754C8.61755 5.74838 9.14505 5.75754 9.46421 6.08754L12.6825 9.42088C12.9984 9.74838 12.9942 10.2675 12.6725 10.5892L9.33921 13.9225C9.17671 14.085 8.96338 14.1667 8.75005 14.1667Z"
                fill="#07A287"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <Footer :is-background="true" />
  </div>
</template>
<script>
export default {
  name: "DetailsPage",
  data() {
    return {
      facilities: [
        "Sea view",
        "Furnished living room",
        "Home cleaning",
        "Basketball Court",
        "Parking space",
        "Swimming pool",
        "Personal ECG prepaid meter",
        "Mini football pitch",
        "Newly built",
        "Home cleaning services",
      ],
      isAdmin: false,
      listing: [],
    };
  },
  created() {
    this.getAgentListing(this.$route.params.id);
  },
  methods: {
    async getAgentListing(id) {
      try {
        const user = this.$auth.$storage.getUniversal("user");
        const token = "Bearer " + user.token;
        this.$axios.setHeader("Authorization", token);
        // this.$axios.setHeader("Content-Type", "application/json");
        const response = await this.$axios.$get(`property-listing/${id}`);
        this.listing = response.data;
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
<style>
.details-header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("assets/images/details-header.svg");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}

.map-location {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),
    url("assets/images/map.svg");
  border-radius: 8px;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.details-section > div:first-child {
  flex: 0 0 50%;
}

.details-section > div:last-child {
  flex: 0 0 45%;
}
.place-offers {
  margin-bottom: 1rem;
}

.place-offers > div {
  flex: 0 0 40%;
  padding-bottom: 0.9rem;
}

.details-card {
  background: #ffffff;

  border: 1px solid #e1e3e6;
  box-sizing: border-box;

  box-shadow: 0px 8px 24px -4px rgba(27, 46, 94, 0.08);
  border-radius: 8px;
}

.location-description > div:first-child {
  flex: 0 0 50%;
}

.location-description > div:last-child {
  flex: 0 0 45%;
}

@media screen and (max-width: 768px) {
  .details-section > div:first-child {
    flex: 1 1 100%;
  }

  .details-section > div:last-child {
    flex: 1 1 100%;
  }
}

@media screen and (max-width: 425px) {
  .location-description > div:first-child {
    flex: 1 1 100%;
  }

  .location-description > div:last-child {
    flex: 1 1 100%;
  }
}
</style>
