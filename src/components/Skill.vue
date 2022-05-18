<template>
  <div class="experience-wrapper px-5 md:px-56 lg:px-0 my-10">
    <div class="w-20 h-4 bg-pastButton lg:hidden"></div>
    <h1
      class="text-3xl font-bold leading-10 tracking-widest text-whiteGold mt-8 mb-4 uppercase"
    >
      SkillSet
    </h1>

    <template v-for="(skill, index) in getSkill" :key="index">
      <div class="">
        <span
          class="font-bold text-xl uppercase tracking-wider leading-10 hover:border-blue-400 hover:border hover:rounded-full"
        >
          {{ skill }}
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    skill: {
      type: Array,
    },
  },
  computed: {
    getSkill() {
      return this.skill;
    },
  },
};
</script>

<style scoped></style>
