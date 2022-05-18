<template>
  <div class="mx-auto h-full font-Inter max-w-12xl">
    <Header />
    <Hero />
    <Article :article-type="'weekly'" :article-height="243" />
<!--    <TrendingArticle />-->
<!--    <Article />-->
<!--    <Footer :mobileNavbar="true" />-->
  </div>
</template>
<script>
import { computed } from "vue";
import repository from "../api/repository";
import Header from "../components/Writes/Header";
import Hero from "../components/Writes/Hero";
import Article from "../components/Writes/Article.vue";
// import TrendingArticle from "../components/Writes/TrendingArticle";
// import Footer from "../components/Writes/Footer";
export default {
  name: "Blog",
  components: { Header, Hero, Article },
  props: {},
  provide() {
    return {
      message: computed(() => this.message),
    };
  },
  data: function () {
    return {
      message: "",
    };
  },

  methods: {
    fetchUsers() {
      return repository("GET", "https://dummyapi.io/data/v1/user?page=1").then(
        (response) => {
          console.log(response);
        }
      );
    },
    parentDiv() {
      console.log("Parent Div");
    },
    writes() {
      console.log("writes");
    },
  },
};
</script>
