<template>
  <div class="homepage-container">
    <div class="flex flex-wrap justify-between filter-wrapper items-center">
      <div>
        <SearchFilter :show-button="false" :is-filter="true" />
      </div>
      <div>
        <toggleButton toggle-text="Show Map" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchProperties",
};
</script>
<style>
.filter-wrapper > div:first-child {
  flex: 0 0 75%;
}

/* .filter-wrapper > div:last-child {
  flex: 0 0 25%;
} */
</style>
