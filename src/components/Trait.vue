<template>
  <div class="experience-wrapper px-5 md:px-56 lg:px-0 my-10">
    <div class="w-20 h-4 bg-pastButton lg:hidden"></div>
    <h1
      class="text-3xl font-bold leading-10 tracking-widest text-whiteGold mt-8 mb-4 uppercase"
    >
      Career traits
    </h1>

    <template v-for="(trait, index) in getTraits" :key="index">
      <div class="mt-10">
        <p
          class="font-bold text-xl uppercase tracking-wider leading-10 hover:border-blue-400 hover:border hover:rounded-full"
        >
          {{ trait.name }} -
          <span class="font-normal">{{ trait.description }}</span>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "trait",
  props: {
    traits: {
      type: Array,
    },
  },
  computed: {
    getTraits() {
      return this.traits;
    },
  },
};
</script>

<style scoped></style>
