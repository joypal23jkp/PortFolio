<template>
  <div class="section">
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
    <div class="max-w-screen-2xl h-full grid grid-cols-4 gap-4">
      <div class="col-span-2 relative">
        <img
          class="max-w-xs rounded-full mx-auto vertically-center right-32"
          src="../assets/images/profile.jpg"
          alt="Profile Picture"
        />
      </div>
      <div class="col-span-2 relative">
        <div class="vertically-center">
          <span
            class="m-auto block text-base md:text-lg lg:text-left font-bold text-whiteGold text-center mt-8 lg:mt-0 uppercase tracking-widest font-Inter"
          >
            {{ this.userProfile.designation }}
          </span>
          <h1
              class="font-DM text-white non-italic text-4xl leading-extraLoose md:text-9xl xl:text-8xl lg:text-left text-center mt-4 tracking-tightest"
          >
            Mr.
            <br />
            {{ this.userProfile.name }}
          </h1>
          <div class="w-full flex">
            <button
                class="w-48 h-12 bg-pastButton text-white text-normal font-Inter font-bold mx-auto lg:mx-0 rounded text-lg uppercase my-12 hover:bg-pastButton tracking-widest"
            >
              <router-link to="/writes">Contact Me</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    profile: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      userProfile: this.profile,
    };
  },
};
</script>
<style scoped>
.hero_wrapper {
  background-image: url("../assets/images/Hero-Background.svg");
}

.vertically-center{
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
}
</style>
