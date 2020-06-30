<template>
  <section class="section">
    <div class="container">
      <div class="section__content">
        <h2>welcome</h2>
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
          text: '0.5 years of experience',
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
