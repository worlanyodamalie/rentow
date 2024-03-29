/* eslint-disable no-unused-vars */
// import Vue from "vue";
// import Vuex from "vuex";

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },
  loggedInUser(state) {
    return state.auth.user;
  },
};

// export const actions = {
//    nuxtServerInit({commit} , {req}){
//       console.log("init",req.headers.cookie);
//    }
// };
