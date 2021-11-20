<template>
  <PropertyDetail :back-url="`/search-properties`" :is-renter="true" />
</template>
<script>
export default {
  middleware: "auth",
};
</script>
