<template>
  <div>
    <div class="flex flex-wrap">
      <div class="approval-wrapper">
        <div class="pr3 mb4">
          <input
            v-model="search"
            class="w-100"
            style="border-radius: 4px"
            type="text"
            placeholder="Search by agent name"
          />
        </div>
        <ul>
          <li v-for="(agent, key) in filteredAgents" :key="key" class="active">
            <a class="flex items-center cursor">
              <div class="ph3">
                <img
                  class="agent-list-img"
                  src="~/assets/images/image-placeholder.svg"
                />
              </div>
              <div>
                <p class="mb2 fw7 dark f5">{{ agent.name }}</p>
                <p class="fw4 dark f6">
                  {{ agent.properties }} {{ propertyLabel(agent.properties) }}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="approval-content">
        <div class="flex pb4 bb b--light-gray">
          <div class="pr4">
            <img
              class="agent-profile-img"
              src="~/assets/images/image-placeholder.svg"
            />
          </div>
          <div>
            <h2 class="lh-copy fw7 dark f2 mb1">Etornam & Sons Property</h2>
            <p class="fw4 grey--6 lh-copy f5">
              <svg
                style="vertical-align: text-bottom"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.2954 9.605L11.7274 15.605C11.5394 15.852 11.2484 15.998 10.9384 16H10.9314C10.6244 16 10.3344 15.858 10.1444 15.616L7.7124 12.509C7.3724 12.075 7.4484 11.446 7.8834 11.106C8.3174 10.765 8.9474 10.841 9.2874 11.277L10.9204 13.363L14.7044 8.394C15.0384 7.955 15.6654 7.869 16.1064 8.204C16.5454 8.539 16.6304 9.166 16.2954 9.605ZM12.0004 2C6.4774 2 2.0004 6.477 2.0004 12C2.0004 17.522 6.4774 22 12.0004 22C17.5234 22 22.0004 17.522 22.0004 12C22.0004 6.477 17.5234 2 12.0004 2Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="12.0004"
                    y1="2"
                    x2="12.0004"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#08B395" />
                    <stop offset="1" stop-color="#0C977F" />
                  </linearGradient>
                </defs>
              </svg>
              Active since May 29, 2021
            </p>
          </div>
        </div>
        <div class="flex pv4">
          <select v-model="selectedapartment">
            <option value="" disabled>Select apartment type</option>
            <option v-for="(apartment, key) in apartmentoptions" :key="key">
              {{ apartment }}
            </option>
          </select>
          <select v-model="selectedapproval" class="mh4">
            <option value="" disabled>Select approval type</option>
            <option v-for="(approval, key) in approvaloptions" :key="key">
              {{ approval }}
            </option>
          </select>
        </div>
        <div
          v-for="(apartment, key) in apartments"
          :key="key"
          class="ba b--light-gray pa3 br3 flex items-center flex-wrap mb4"
        >
          <div class="w-20">
            <img :src="require(`~/assets/images/${apartment.image}`)" />
          </div>
          <div class="ph4">
            <h3 class="dark fs-normal fw7 pv3 grey--5 f4">
              {{ apartment.title }}
            </h3>
            <ul class="flex flex-wrap featured-prop-ul">
              <li>
                <p>{{ apartment.location }}</p>
              </li>
              <li v-for="(utility, key) in apartment.utilities" :key="key">
                <p><span class="rounded-grey-dot"></span>{{ utility }}</p>
              </li>
            </ul>
            <h3 class="pv2 green">
              GHS {{ apartment.price }}
              <span class="grey--4 f6">per month</span>
            </h3>
          </div>
          <span class="badge badge--await mx-auto">Awaiting approval</span>
          <nuxt-link class="btn btn--green-outline" :to="`/approval/${key}`"
            >View</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Approval",
  layout: "approval",
  data() {
    return {
      search: null,
      selectedapartment: "",
      selectedapproval: "",
      apartmentoptions: [
        "Single room",
        "Two bedroom apartment",
        "Three bedroom apartment",
      ],
      approvaloptions: ["Awaiting approval", "Rejected", "Accepted"],
      agents: [
        {
          name: "Etornam & Sons Property",
          properties: 200,
        },
        {
          name: "Adrian & Daughters Properties",
          properties: 500,
        },
        {
          name: "Bayou Rentals",
          properties: 100,
        },
        {
          name: "Omoge Damilola Rentals",
          properties: 100,
        },
        {
          name: "Shawty and Dee Rentals",
          properties: 150,
        },
        {
          name: "Ezekiel & Sons Rentals",
          properties: 150,
        },
      ],
      apartments: [
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
  computed: {
    filteredAgents() {
      if (this.search) {
        return this.agents.filter(
          //    agent => agent.name.toLowerCase().includes(this.search.toLowerCase)
          (agent) => {
            return this.search
              .toLowerCase()
              .split(" ")
              .every((v) => agent.name.toLowerCase().includes(v));
          }
        );
      } else {
        return this.agents;
      }
    },
    // eslint-disable-next-line no-unused-vars
    propertyLabel(text) {
      return (text) => {
        if (text.length !== 0) {
          return "properties";
        } else {
          return "property";
        }
      };
    },
  },
};
</script>
<style>
.approval-wrapper {
  background: #fbfcff;
  padding: 2rem 0 0 1.5rem;
  flex-basis: 23rem;
  flex-grow: 1;
  min-height: 100vh;
  border: 1px solid #f2f2f2;
}

.approval-content {
  flex-basis: 0;
  flex-grow: 999;
  min-width: 60%;
  padding: 3rem;
}

.approval-wrapper ul {
  list-style: none;
  padding-left: 0;
}

.approval-wrapper ul > li {
  padding: 0.95rem 0;
}

.agent-list-img {
  height: auto;
  width: 3rem;
}

.agent-profile-img {
  height: auto;
  width: 5rem;
}

.approval-wrapper ul > li:first-child.active {
  border-left: 4px solid #07a287;
  background: #ffffff;
}

.badge {
  padding: 0.6rem;
  border-radius: 11px;
  font-weight: normal;
  cursor: pointer;
}

.badge--await {
  background: rgba(255, 75, 110, 0.08);
  color: #ff4b6e;
}
</style>
