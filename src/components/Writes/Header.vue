<template>
  <div
    class="flex justify-between w-full h-16 md:h-32 text-center px-6 md:px-16"
  >
    <div class="w-1/3">
      <h1
        class="h-full float-left font-bold md:text-2xl text-lg leading-10 become-center"
      >
        Jites
      </h1>
    </div>
    <div class="w-1/3 flex justify-between">
      <div class="w-full flex">
        <span class="become-center h-full">
          <svg
            class="w-3 md:w-6"
            :class="anim"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0258 13.8475L18.595 17.4159L17.4158 18.595L13.8475 15.0259C12.5198 16.0902 10.8683 16.6691 9.16666 16.6667C5.02666 16.6667 1.66666 13.3067 1.66666 9.16669C1.66666 5.02669 5.02666 1.66669 9.16666 1.66669C13.3067 1.66669 16.6667 5.02669 16.6667 9.16669C16.6691 10.8684 16.0902 12.5198 15.0258 13.8475ZM13.3542 13.2292C14.4118 12.1416 15.0024 10.6837 15 9.16669C15 5.94335 12.3892 3.33335 9.16666 3.33335C5.94333 3.33335 3.33333 5.94335 3.33333 9.16669C3.33333 12.3892 5.94333 15 9.16666 15C10.6837 15.0024 12.1416 14.4118 13.2292 13.3542L13.3542 13.2292Z"
              fill="black"
            />
          </svg>
        </span>
        <input
          type="text"
          class="md:text-lg w-full text-sm ml-1 md:ml-4 text-gray-400 outline-none ease-in duration-500"
          v-on:focusin="anim = 'animate-ping'"
          v-on:focusout="anim = ''"
          v-model="searchText"
          placeholder="Search..."
        />
      </div>
    </div>
    <div class="w-1/3 md:hidden">
      <span
        class="h-full become-center float-right"
        v-on:click="changeNavbarStatus"
      >
        <img class="w-6 h-6" :src="BurgerIcon" alt="Burger Icon" />
      </span>
    </div>
    <NavBar
      class="md:hidden"
      v-if="showNavbar"
      @handleCloseNavbar="showNavbar = !showNavbar"
    />
    <div class="hidden md:block">
      <NavBar class="hidden md:block" />
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar";
import BurgerIcon from "../../assets/images/hamburger.png";
export default {
  name: "header",
  components: { NavBar },
  data() {
    return {
      searchText: "",
      anim: "",
      BurgerIcon,
      showNavbar: false,
      name: "true",
    };
  },
  computed: {},
  methods: {
    changeNavbarStatus() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>

<style scoped>
.fade-in {
  transition: all ease-in 1s;
}
</style>
