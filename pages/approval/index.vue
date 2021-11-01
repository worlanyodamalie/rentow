/* eslint-disable no-unused-vars */
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
        <div v-if="isLoadingAgent" class="flex justify-center pv5">
          <LoadingGear />
        </div>
        <ul>
          <li
            v-for="(agent, key) in filteredAgents"
            :key="key"
            :class="activeCount === key ? 'active' : ''"
          >
            <a
              class="flex items-center cursor"
              @click="
                getAgentProperties(agent.id, {
                  name: agent.name,
                  active_since: agent.created_at,
                  key_count: key,
                })
              "
            >
              <div class="ph3">
                <img
                  class="agent-list-img"
                  src="~/assets/images/image-placeholder.svg"
                />
              </div>

              <div>
                <p class="mb2 fw7 dark f5">{{ agent.name }}</p>
                <p class="fw4 dark f6">
                  {{ agent.property_listings_count }}
                  {{ propertyLabel(agent.property_listings_count) }}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div v-if="isContent" class="loadingSvg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; /* background:#fff; */ display: block"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="75" cy="50" fill="#dcfff8" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.9166666666666666s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.9166666666666666s"
            ></animate>
          </circle>
          <circle cx="71.65063509461098" cy="62.5" fill="#dcfff8" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.8333333333333334s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.8333333333333334s"
            ></animate>
          </circle>
          <circle cx="62.5" cy="71.65063509461096" fill="#dcfff8" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.75s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.75s"
            ></animate>
          </circle>
          <circle cx="50" cy="75" fill="#dcfff8" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.6666666666666666s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.6666666666666666s"
            ></animate>
          </circle>
          <circle
            cx="37.50000000000001"
            cy="71.65063509461098"
            fill="#dcfff8"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5833333333333334s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.5833333333333334s"
            ></animate>
          </circle>
          <circle cx="28.34936490538903" cy="62.5" fill="#dcfff8" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.5s"
            ></animate>
          </circle>
          <circle cx="25" cy="50" fill="#dcfff8" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.4166666666666667s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.4166666666666667s"
            ></animate>
          </circle>
          <circle
            cx="28.34936490538903"
            cy="37.50000000000001"
            fill="#dcfff8"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.3333333333333333s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.3333333333333333s"
            ></animate>
          </circle>
          <circle
            cx="37.499999999999986"
            cy="28.349364905389038"
            fill="#dcfff8"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.25s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.25s"
            ></animate>
          </circle>
          <circle cx="49.99999999999999" cy="25" fill="#dcfff8" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.16666666666666666s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.16666666666666666s"
            ></animate>
          </circle>
          <circle cx="62.5" cy="28.349364905389034" fill="#dcfff8" r="5">
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.08333333333333333s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="-0.08333333333333333s"
            ></animate>
          </circle>
          <circle
            cx="71.65063509461096"
            cy="37.499999999999986"
            fill="#dcfff8"
            r="5"
          >
            <animate
              attributeName="r"
              values="3;3;5;3;3"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            ></animate>
            <animate
              attributeName="fill"
              values="#dcfff8;#dcfff8;#07a287;#dcfff8;#dcfff8"
              repeatCount="indefinite"
              times="0;0.1;0.2;0.3;1"
              dur="1s"
              begin="0s"
            ></animate>
          </circle>
        </svg>
      </div>
      <div class="approval-content" :class="isContent === true ? 'o-05' : ''">
        <div v-if="agentdetails.length !== 0">
          <div class="flex pb4 bb b--light-gray">
            <div class="pr4">
              <img
                class="agent-profile-img"
                src="~/assets/images/image-placeholder.svg"
              />
            </div>
            <div>
              <h2 class="lh-copy fw7 dark f2 mb1">
                {{ agentdetails.length === 0 ? "" : agentdetails[0].data.name }}
              </h2>
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
                <!-- Active since May 29, 2021 -->
                Active since
                {{ memberSince(agentdetails[0].data.active_since) }}
              </p>
            </div>
          </div>
          <div class="flex pv4">
            <!-- <select v-model="selectedapartment">
              <option value="" disabled>Select apartment type</option>
              <option v-for="(apartment, key) in apartmentoptions" :key="key">
                {{ apartment }}
              </option>
            </select> -->
            <select @change="filterStatus($event)">
              <option value="" disabled>Select approval type</option>
              <option
                v-for="(approval, key) in approvaloptions"
                :key="key"
                :value="approval"
              >
                {{ transformText(approval) }}
              </option>
            </select>
          </div>
          <div>
            <div
              v-for="(apartment, key) in agentdetails[0].property"
              :key="key"
              class="ba b--light-gray pa3 br3 flex items-center flex-wrap mb4"
            >
              <div class="w-20">
                <!-- <img :src="require(`~/assets/images/${apartment.image}`)" /> -->
                <img src="~/assets/images/apartment.svg" />
              </div>
              <div class="ph4">
                <h3 class="dark fs-normal fw7 pv3 grey--5 f4">
                  {{ apartment.title }}
                </h3>
                <ul class="flex flex-wrap featured-prop-ul">
                  <li>
                    <p>{{ apartment.city }}</p>
                  </li>
                  <li>
                    <p>
                      <span class="rounded-grey-dot"></span
                      >{{ apartment.number_of_rooms }} bedroom(s)
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="rounded-grey-dot"></span
                      >{{ apartment.number_of_bathrooms }} bathroom(s)
                    </p>
                  </li>
                  <!-- <li v-for="(utility, key) in apartment.utilities" :key="key">
                  <p><span class="rounded-grey-dot"></span>{{ utility }}</p>
                </li> -->
                </ul>
                <h3 class="pv2 green">
                  GHS {{ apartment.amount }}
                  <span class="grey--4 f6">per month</span>
                </h3>
              </div>
              <span
                class="badge mx-auto"
                :class="
                  apartment.status === 'APPROVED'
                    ? 'badge--success'
                    : 'badge--await'
                "
                >{{ apartment.status }}</span
              >
              <nuxt-link
                class="btn btn--green-outline"
                :to="`/approval/${apartment.id}`"
                >View</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Approval",
  layout: "approval",
  // middleware: "auth",
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
      approvaloptions: ["PENDING_APPROVAL", "REJECTED", "APPROVED"],
      agents: [],
      agentdetails: [],
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
      isContent: false,
      activeCount: 0,
      isLoadingAgent: false,
      testprop: [],
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
        if (text > 1) {
          return "properties";
        } else {
          return "property";
        }
      };
    },
    // eslint-disable-next-line no-unused-vars
    transformText(text) {
      return (text) => {
        return text === "PENDING_APPROVAL" ? "PENDING APPROVAL" : text;
      };
    },
  },
  mounted() {
    this.getAgents();
    // this.getAgentProperties();
  },
  methods: {
    async getAgents() {
      try {
        this.isLoadingAgent = true;
        const user = this.$auth.$storage.getUniversal("user");
        const token = "Bearer " + user.token;
        this.$axios.setHeader("Authorization", token);
        const response = await this.$axios.$get("admin/agents");
        this.agents = response.data;
        const firstAgent = {
          name: this.agents[0].name,
          active_since: this.agents[0].created_at,
          key_count: 0,
        };
        this.isLoadingAgent = false;
        this.getAgentProperties(this.agents[0].id, firstAgent);
      } catch (error) {
        console.log("error", error);
      }
    },
    async getAgentProperties(id, agentdata) {
      this.isContent = true;
      this.activeCount = agentdata.key_count;
      const user = this.$auth.$storage.getUniversal("user");
      const token = "Bearer " + user.token;
      this.$axios.setHeader("Authorization", token);
      const response = await this.$axios.$get(
        `admin/agent/property-listings/${id}`
      );
      let details = { property: response.data, data: agentdata };
      this.agentdetails.length = 0;
      this.isContent = false;
      return this.agentdetails.push(details);
    },
    memberSince(datecreated) {
      // const datecreated = date;
      const date = new Date(datecreated).toDateString();
      return date;
    },
    filterStatus(event) {
      console.log("this is event", event.target.value);
      let property = this.agentdetails[0].property;
      // property
      //   .filter((prop) => {
      //     return prop.status === event.target.value;
      //   })
      //   .map((status) => {
      //     // property.length = 0;
      //     property.push(status);   
      //   });
     
      console.log("includes" , property.includes(event.target.value));
      // property.length = 0;
      // this.testprop.push(filteredProperty);
      // console.log("filtered prop", filteredProperty);
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

.approval-wrapper ul > li.active {
  border-left: 4px solid #07a287;
  background: #ffffff;
}

.badge {
  padding: 0.6rem;
  border-radius: 11px;
  font-weight: 500;
  cursor: pointer;
}

.badge--await {
  background: rgba(255, 75, 110, 0.08);
  color: #ff4b6e;
}

.badge--success {
  background: #07a287;
  color: #ffffff;
}

.loadingSvg {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
