<template>
  <div class="w-11/12 mx-auto">
    <Carousel :items-to-show="3">
      <slide v-for="slide in 10" :key="slide">
        <Article :article-height="382" :article-type="'item'" />
      </slide>
    </Carousel>
  </div>
</template>
<script setup>
import Article from "./Article";
import("vue3-carousel/dist/carousel.css");
import { Carousel, Slide } from "vue3-carousel";
</script>
<style>
.carousel__track {
  column-gap: 10px;
}
</style>
