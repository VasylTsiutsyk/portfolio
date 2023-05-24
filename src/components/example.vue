<template>
  <div class="example">
    <h3 class="example__title">Title</h3>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
};
</script>

<style lang="scss">
@import '@/assets/style/variables';

.example {
  border: 1px solid $color-primary;
  color: red;
}
</style>
