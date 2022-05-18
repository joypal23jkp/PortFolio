<template>
  <div class="about-wrapper px-5 md:px-56 my-10">
    <h1 class="text-5xl font-black leading-9 font-DM">About Me</h1>
    <p class="text-2xl leading-10 mt-2.5">{{ getDescription }}</p>
  </div>
</template>
<script>
export default {
  props: {
    description: {
      type: String,
      default: "Not Give.....",
      require: true,
    },
  },
  computed: {
    getDescription() {
      return this.description;
    },
  },
};
</script>
