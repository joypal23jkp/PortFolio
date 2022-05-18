<template>
  <div class="experience-wrapper px-5 md:px-56 my-10">
    <div class="w-20 h-4 bg-pastButton"></div>
    <h1 class="text-5xl font-black leading-9 font-DM mt-8">Experience</h1>
    <template v-for="experience in getExperience" :key="experience.details">
      <div class="mt-8">
        <span
          class="font-bold text-xl text-whiteGold uppercase tracking-wide leading-10 mt-8"
        >
          {{ experience.designation }} - {{ experience.company }}
        </span>
      </div>
      <div class="mt-2">
        <span class="text-xl font-medium tracking-wide leading-10 mt-6">
          {{ experience.startingDate }} - {{ experience.endDate }}
        </span>
      </div>
      <p class="text-2xl font-normal leading-10 mt-5">
        {{ experience.details }}
      </p>
    </template>
  </div>
</template>
<script>
export default {
  name: "experience",
  props: {
    experiences: {
      type: Array,
      default: null,
      require: true,
    },
  },
  computed: {
    getExperience() {
      return this.experiences;
    },
  },
};
</script>
