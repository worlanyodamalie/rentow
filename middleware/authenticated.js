export default async ({ app, store }) => {
  if (!store.app.$auth.$state.loggedIn) {
    const loggedInState = app.$auth.$storage.getCookie("loggedIn");
    const user = app.$auth.$storage.getCookie("user");
    if (loggedInState) {
      app.$auth.$storage.setState("loggedIn", true);
      app.$auth.$storage.setState("user", user);
    }
  }
};
