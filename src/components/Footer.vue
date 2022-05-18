<template>
  <div class="footer_wrapper flex items-center justify-center">
    <div
      class="footer absolute top-0 left-0 h-full w-full pt-32 flex items-center justify-center"
    >
      <div class="max-h-6/10 text-center">
        <h1 class="font-DM font-black text-5xl">Get in touch!</h1>
        <h5 class="font-DM font-bold text-pastButton text-4xl mt-10">
          {{ userProfile.email }}
        </h5>
        <h5 class="font-DM font-bold text-3xl text-pastButton mt-5">
          {{ userProfile.phone }}
        </h5>

        <div>
          <ul class="flex justify-evenly mt-24 max-w-lg mx-auto">
            <li v-for="(social, index) in userProfile.socials" :key="index">
              <router-link :to="social.link">
                <img
                  :src="social.img"
                  :alt="social.name"
                  width="20"
                  height="20"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {
    profile: {
      type: Object,
    },
  },
  data: function () {
    return {
      userProfile: this.profile,
    };
  },
};
</script>
<style>
.footer_wrapper {
  background-image: url("../assets/images/Hero-Background.svg");
  min-height: 350px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotate(180deg);
  position: relative !important;
}

.footer {
  transform: rotate(180deg);
}
</style>
