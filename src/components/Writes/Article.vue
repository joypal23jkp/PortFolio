<template>
  <template v-if="articleType === 'weekly'">
    <div
      class="flex w-11/12 mx-auto border rounded shadow items-center justify-center my-20"
      style="height: 243px"
    >
      <div class="w-3/5 p-20">
        <h1 class="font-bold text-5xl">{{ article.title }}</h1>
        <p class="text-xl my-5" style="color: #4a5568">{{ article.body }}</p>
        <div class="flex justify-between">
          <span class="text-xl" style="color: #4a5568">{{
            article.created_at
          }}</span>
          <span
            class="font-bold text-xl cursor-pointer opacity-100 hover:opacity-70"
            >Read more</span
          >
        </div>
      </div>
      <div class="w-2/5 h-full">
        <img class="h-full" :src="article.image" :alt="article.title" />
      </div>
    </div>
  </template>
  <template v-else-if="articleType === 'item'">
    <div class="border rounded shadow items-center justify-center">
      <div class="w-full">
        <img class="h-full" :src="article.image" :alt="article.title" />
      </div>
      <div class="w-full p-6 text-left">
        <h1 class="font-bold text-3xl">{{ article.title }}</h1>
        <p class="text-lg my-5" style="color: #4a5568">{{ article.body }}</p>
        <div class="flex justify-between">
          <span class="text-lg" style="color: #4a5568">{{
            article.created_at
          }}</span>
          <span
            class="font-bold text-lg cursor-pointer opacity-100 hover:opacity-70"
            >Read more</span
          >
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div
      class="flex w-11/12 border rounded shadow items-center justify-center mx-auto my-32"
      style="min-height: 450px"
    >
      <div class="w-1/2 p-32 text-left">
        <h1 class="font-bold text-7xl">{{ article.title }}</h1>
        <p class="text-2xl my-5" style="color: #4a5568">{{ article.body }}</p>
        <div class="flex justify-between">
          <span class="text-2xl" style="color: #4a5568">{{
            article.created_at
          }}</span>
          <span
            class="font-bold text-2xl cursor-pointer opacity-100 hover:opacity-70"
            >Read more</span
          >
        </div>
      </div>
      <div class="w-1/2">
        <img class="h-full" :src="article2.image" :alt="article.title" />
      </div>
    </div>
  </template>
</template>
<script setup>
import Img from "../../assets/images/content.png";
import ComputerImage from "../../assets/images/computer.png";

import { defineProps, ref } from "vue";

const props = defineProps({
  articleHeight: Number,
  articleType: String,
});

const height = ref(props.articleHeight);

class Article {
  constructor(title, image, created_at, likes, body) {
    this.title = title;
    this.image = image;
    this.created_at = created_at;
    this.likes = height;
    this.body = body;
  }
}

let article = new Article(
  "long established",
  Img,
  new Date().toISOString().split("T")[0],
  Math.floor(Math.random()) + 1,
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
);

let article2 = new Article(
  "long established",
  ComputerImage,
  new Date().toISOString().split("T")[0],
  Math.floor(Math.random()) + 1,
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
);
</script>
