<template>
  <section class="section intro">
    <div id="stars" class="stars-small"></div>
    <div id="stars2" class="stars-medium"></div>
    <div id="stars3" class="stars-big"></div>

    <div class="intro__container container">
      <div class="intro__wrap">
        <div class="intro__content">
          <h2 class="intro__title">Welcome</h2>

          <div class="intro__body">
            <p class="type-text">
              <span
                v-for="(textItem, textItemIndex) in textItems"
                :key="textItemIndex"
                class="line"
                :style="{ '--animation-order': textItem.order }"
              >
                {{ textItem.text }}
              </span>
            </p>
          </div>
        </div>
      </div>

      <scroll-down-indicator class="intro__scroll-down" />
    </div>
  </section>
</template>

<script>
import ScrollDownIndicator from '../scroll-down-indicator/scroll-down-indicator.vue';

export default {
  name: 'IntroSection',
  components: {
    ScrollDownIndicator,
  },
  data() {
    return {
      textItems: [
        {
          order: 1,
          text: 'Frontend developer',
        },
        {
          order: 2,
          text: 'born in Ukraine, based in Lviv',
        },
        {
          order: 3,
          text: 'raised by the 00`s',
        },
        {
          order: 4,
          text: '2+ years of experience',
        },
        {
          order: 5,
          text: 'now available for you',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import 'intro.scss';
</style>
