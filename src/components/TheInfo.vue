<template>
  <div>
    <h1>{{ this.title }}</h1>
    <p class="text">{{ this.text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'TheInfo',
    data () {
      return {
        title: 'Информация',
        text: 'Это еще одна страница, которая всегда видна вне зависимости от логина',
      }
    },
  }
</script>

<style scoped>
  .text {
    font-size: 13px;
  }
</style>
