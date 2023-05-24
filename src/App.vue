<template>
  <div id="app" class="app" :class="{ 'app--light': isThemeLight }">
    <aside class="aside">
      <router-link :to="{ name: routeNames.designs.index }" class="aside__logo">
        <img src="@/assets/images/logo.svg" alt="" />
      </router-link>
    </aside>

    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { routeNames } from '@/constants';

export default {
  name: 'App',
  data() {
    return {
      routeNames,
      theme: null,
    };
  },
  computed: {
    isThemeLight() {
      return this.theme === 'light';
    },
  },
  watch: {
    '$route.meta.theme': {
      handler(value) {
        this.theme = value;
      },
    },
  },
  created() {
    this.fetchDesigns();
  },
  methods: {
    ...mapActions(['fetchDesigns']),
  },
};
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/base/functions';

.app {
  overflow-x: hidden;
  min-height: 100vh;
  background-color: $color-green-dark;
  color: $color-white;

  &--light {
    background-color: $color-white;
    color: $color-black;
  }
}
</style>
