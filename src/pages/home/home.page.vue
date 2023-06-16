<template>
  <div class="home">
    <full-page id="fullpage" ref="fullpage" :options="options">
      <intro-section />
      <about-section />
      <works-section />
      <contacts-section />
    </full-page>
  </div>
</template>

<script>
import { IntroSection, AboutSection, WorksSection, ContactsSection } from './sections';

export default {
  name: 'HomePage',
  components: { IntroSection, AboutSection, WorksSection, ContactsSection },
  data() {
    return {
      options: {
        navigation: true,
        navigationTooltips: ['home', 'about', 'works', 'contacts'],
        showActiveTooltip: true,
        sectionsColor: ['black', 'white', 'black', 'black'],
        anchors: ['home', 'about', 'works', 'contacts'],
        controlArrows: false,
        slidesNavigation: true,
        scrollingSpeed: 1000,
        verticalCentered: false,
        lockAnchors: true,
      },
    };
  },
  destroyed() {
    window.fullpage_api.destroy('all');
  },
};
</script>
