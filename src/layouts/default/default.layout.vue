<template>
  <div class="main-layout">
    <v-header @burger-clicked="handleBurgerClicked" />

    <div class="main-layout__content">
      <router-view />
    </div>

    <v-footer />
  </div>
</template>

<script>
import Header from './components/header.layout.vue';
import Footer from './components/footer.layout.vue';

export default {
  name: 'DefaultLayout',
  components: {
    VHeader: Header,
    VFooter: Footer,
  },
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
