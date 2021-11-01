<template>
  <PropertyDetail :is-admin="true" :back-url="`/approval`" />
</template>
<script>
export default {
  name: "ApprovalDetailsPage",
  // middleware: "auth",
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
    };
  },
};
</script>
