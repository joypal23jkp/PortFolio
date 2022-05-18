<template>
  <div class="experience-wrapper px-5 md:px-56 lg:px-0 my-15">
    <h1
      class="text-3xl font-bold leading-10 tracking-widest text-whiteGold mt-24 mb-4 uppercase"
    >
      Awards
    </h1>

    <template v-for="(award, index) in getAwards" :key="index">
      <div class="">
        <span
          class="font-medium text-xl uppercase tracking-wider leading-10 hover:border-blue-400 hover:border hover:rounded-full"
        >
          {{ award.title }} - {{ award.date }}
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Award",
  props: {
    awards: {
      type: Array,
    },
  },
  computed: {
    getAwards() {
      return this.awards;
    },
  },
};
</script>

<style scoped></style>
