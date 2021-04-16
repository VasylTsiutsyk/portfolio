<template>
  <section class="section intro">
    <div id="stars" class="stars-small"></div>
    <div id="stars2" class="stars-medium"></div>
    <div id="stars3" class="stars-big"></div>
    <div class="container">
      <div class="intro__content">
        <h2 class="intro__title">welcome</h2>
        <p class="type-text">
          <span
            v-for="(textItem, index) in textItems"
            :key="index"
            class="line"
            :style="{ '--animation-order': textItem.order }"
            >{{ textItem.text }}</span
          >
        </p>
      </div>
      <ScrollDownIndicator />
    </div>
  </section>
</template>

<script>
import ScrollDownIndicator from '@/components/scroll-down-indicator/scroll-down-indicator';
export default {
  name: 'intro',
  data() {
    return {
      textItems: [
        {
          order: 1,
          text: 'Frontend developer',
        },
        {
          order: 2,
          text: 'born in ukraine, living in lviv',
        },
        {
          order: 3,
          text: 'raised by the 00`s',
        },
        {
          order: 4,
          text: '1 year of experience',
        },
        {
          order: 5,
          text: 'now available for you',
        },
      ],
    };
  },
  components: {
    ScrollDownIndicator,
  },
};
</script>

<style lang="scss">
@import 'intro.scss';
</style>
