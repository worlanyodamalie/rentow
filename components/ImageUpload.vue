<template>
  <div>
    <Dropzone
      id="foo"
      ref="el"
      :options="options"
      :destroy-dropzone="true"
      :use-custom-slot="true"
      @vdropzone-max-files-exceeded="maxfileSize"
    >
      <div>
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.75 11.957V10.2493H10.2502V11.9577C10.2502 12.8973 9.48141 13.666 8.54183 13.666C7.60225 13.666 6.8335 12.8973 6.8335 11.9577V8.54102C6.8335 7.60143 7.60225 6.83268 8.54183 6.83268H32.411C32.4267 6.83225 32.4425 6.83203 32.4583 6.83203C33.2425 6.83203 33.9077 7.3675 34.1063 8.09086C34.1122 8.11233 34.1177 8.13398 34.1227 8.15578C34.1516 8.27969 34.1668 8.40865 34.1668 8.54102L34.1667 8.56478V11.957C34.1667 12.8966 33.3979 13.6654 32.4583 13.6654C31.5187 13.6654 30.75 12.8966 30.75 11.957ZM13.6682 23.9153C13.1471 23.9153 12.6364 23.6796 12.2998 23.232C11.7326 22.4769 11.8864 21.4058 12.6415 20.8403L19.4748 15.7153C20.0659 15.2712 20.8791 15.2592 21.4821 15.6846L28.3154 20.4918C29.0876 21.0351 29.2738 22.1011 28.7306 22.8716C28.1873 23.642 27.123 23.8299 26.3509 23.2867L22.2035 20.3692C22.2067 20.4119 22.2083 20.4551 22.2083 20.4987V34.1654C22.2083 35.1084 21.4447 35.8737 20.5 35.8737C19.5553 35.8737 18.7917 35.1084 18.7917 34.1654V20.4988L14.6915 23.5737C14.384 23.8043 14.0252 23.9153 13.6682 23.9153Z"
            fill="#07A287"
          />
        </svg>

        <h3 class="f5 green lh-copy fw4 mv2">Click here to upload images</h3>
      </div>
    </Dropzone>
  </div>
</template>
<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";
export default {
  components: {
    Dropzone,
  },
  data() {
    return {
      options: {
        url: "http://httpbin.org/anything",
        thumbnailWidth: 200,
        addRemoveLinks: true,
        maxFilesize: 1,
        maxFiles: 2,
        acceptedFiles: ".jpeg,.jpg,.png",
      },
    };
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const instance = this.$refs.el.dropzone;
  },
  methods: {
    maxfileSize(file) {
      alert("Max file exceed", file);
    },
  },
};
</script>
<style>
.vue-dropzone {
  border: none;
  font-family: "DM Sans";
  color: #777;
  background: rgba(235, 248, 246, 1);
  border-radius: 10px;
}

.vue-dropzone:hover {
  background-color: rgba(235, 248, 246, 1);
}

/* .dropzone{
    padding: 20px 0px;
} */
</style>
