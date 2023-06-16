<template>
  <div id="app" class="app">
    <default-layout />
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/default/default.layout.vue';

export default {
  name: 'App',
  metaInfo() {
    return {
      title: this.pageTitle,
      titleTemplate: 'Vasyl Tsiutsyk Portfolio',
      htmlAttrs: {
        lang: 'en',
        amp: true,
      },
    };
  },
  components: {
    DefaultLayout,
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title || 'Title';
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/base/functions';

.app {
  overflow-x: hidden;
  min-height: 100vh;
}
</style>
