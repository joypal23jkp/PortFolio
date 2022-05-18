<template>
  <button type="button" class="bg-indigo-500" disabled>
    <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
    {{ localMessage }}
  </button>
</template>
<script>
export default {
  inject: {
    localMessage: {
      from: "message",
    },
  },
  computed: {
    getMsg() {
      return this.localMessage;
    },
  },
  data() {
    return {
      message: this.localMessage,
    };
  },
};
</script>
