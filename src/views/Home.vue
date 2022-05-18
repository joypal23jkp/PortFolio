<template>
  <div class="home h-screen">
    <Hero :profile="profile" />
<!--    <div-->
<!--      class="lg:flex lg:flex-row-reverse"-->
<!--      style="max-width: 1024px; margin: auto"-->
<!--    >-->
<!--      <div>-->
<!--        <About :description="getProfile.description" />-->
<!--        <Experience :experiences="getProfile.experiences" />-->
<!--        <Education :educations="getProfile.educations" />-->
<!--      </div>-->
<!--      <div>-->
<!--        <Skill :skill="getProfile.skillSets" />-->
<!--        <Award :awards="getProfile.awards" />-->
<!--        <Trait :traits="getProfile.traits" />-->
<!--      </div>-->
<!--    </div>-->

<!--    <Footer :profile="profile" />-->
  </div>
</template>

<script setup>
// @ is an alias to /src

import { ref } from "vue";
import { useFolio } from "../store/folio";

import Hero from "../components/Hero";
// import About from "../components/About";
// import Skill from "../components/Skill";
// import Award from "../components/Award";
// import Trait from "../components/Trait";
// import Footer from "../components/Footer";
// import Education from "../components/Education";
// import Experience from "../components/Experience";

const store = useFolio();
const profile = ref(store.profile);
</script>
