<template>
  <div class="w-100 mv4 find-location">
    <div class="flex flex-column pv4">
      <slot></slot>
      <div class="pt3">
        <nuxt-link to="/" class="btn btn--green" style="width: unset">{{
          buttontext
        }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    buttontext: {
      type: String,
      default: "Click here",
    },
  },
};
</script>
<style>
.find-location {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("~assets/images/location-background.svg");
  border-radius: 8px;
  background-size: cover;
  padding: 5rem;
}
</style>
