<template>
  <div class="toggleBtn flex">
    <span class="fw7 f6 mr2" :class="[checkToggle ? 'green' : 'dark']">{{
      toggleText
    }}</span>
    <label :class="[checkToggle ? 'toggleChecked' : '']">
      <input v-model="checkToggle" type="checkbox" @change="toggleMethod" />
    </label>
  </div>
</template>
<script>
export default {
  props: {
    toggleText: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      checkToggle: false,
    };
  },
  methods: {
    toggleMethod() {
      return this.$emit("toggled", this.checkToggle);
    },
  },
};
</script>
<style scoped>
.toggleBtn label {
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.toggleBtn label:after,
.toggleBtn label:before {
  display: block;
  content: "";
  height: 20px;
  /* box-shadow: 0 0 0 1px #00b18f; */
}

.toggleBtn label:before {
  width: 38px;
  background: #f1f2f3;
  border-radius: 10px;
  border: none;
  margin: 0;
  transition: background 0.22s;
}

.toggleBtn label:after {
  width: 20px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background:#757D8A;
  transition: margin-left 0.22s;
}

.toggleBtn label.toggleChecked:before {
  background: #36b37e;
}

.toggleBtn label.toggleChecked:after {
  background: #fff;
  margin-left: calc(100% - 20px);
}

input {
  display: none;
}
</style>
