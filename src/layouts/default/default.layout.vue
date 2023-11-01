<template>
  <div>
    <v-header />

    <router-view />

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
    return {};
  },
};
</script>
