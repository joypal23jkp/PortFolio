<template>
  <router-view />
</template>

<script>
import "./assets/tailwind.css";
export default {
  name: "App",
};
</script>

<style>
html,
body {
  /*width: 100%;*/
  /*height: 100%;*/
  /*margin: 0;*/
  /*padding: 0;*/
}
html {
  min-width: 100% !important;
}
#app {
  /*font-family: 'Playfair Display', serif;*/
  font-family: "PT Sans Narrow", sans-serif;
}
</style>
