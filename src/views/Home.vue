<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <SectionIntro />
      <SectionAbout />
      <SectionWorks />
      <SectionContacts />
    </full-page>
  </div>
</template>

<script>
import SectionIntro from '@/components/intro/intro';
import SectionAbout from '@/components/about/about';
import SectionWorks from '@/components/works/works';
import SectionContacts from '@/components/contacts/contacts';

export default {
  name: 'Home',
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HERE',
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
  components: { SectionIntro, SectionAbout, SectionWorks, SectionContacts },
  destroyed() {
    window.fullpage_api.destroy('all');
  },
};
</script>
