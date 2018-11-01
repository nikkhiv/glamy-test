<template>
  <div class="base-row-flex">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'BaseRowFlex',
  }
</script>

<style scoped>
  .base-row-flex {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>
