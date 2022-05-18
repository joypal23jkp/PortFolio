<template>
  <div class="about-wrapper px-5 md:px-56 my-10">
    <div class="w-20 h-4 bg-pastButton"></div>
    <h1 class="text-5xl font-black leading-9 font-DM mt-8">Education</h1>
    <template v-for="(education, index) in getEducations" :key="index">
      <div class="mt-8">
        <span
          class="font-bold text-xl text-whiteGold uppercase tracking-wide leading-10 mt-8"
        >
          {{ education.course }} in {{ education.major }} -
          {{ education.university }}
        </span>
      </div>
      <div class="">
        <span class="text-xl font-bold tracking-wide leading-10 mt-2">
          Graduated {{ education.passingYear }}
        </span>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "education",
  props: {
    educations: {
      type: Array,
      default: null,
      require: true,
    },
  },
  computed: {
    getEducations() {
      return this.educations;
    },
  },
};
</script>
