<template>
  <div class="main-layout">
    <div class="main-layout__content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {},
  data() {
    return {
      isHeaderBurgerActive: false,
    };
  },
  methods: {
    handleBurgerClicked(isActive) {
      this.isHeaderBurgerActive = isActive;
    },
  },
};
</script>
