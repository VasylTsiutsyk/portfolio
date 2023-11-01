<template>
  <div>
    <hero-section />

    <about-section />

    <works-section />

    <conversation-section />

    <early-works />
  </div>
</template>

<script>
import { HeroSection, AboutSection, WorksSection, EarlyWorks, ConversationSection } from './sections';

export default {
  name: 'HomePage',
  components: { HeroSection, AboutSection, WorksSection, EarlyWorks, ConversationSection },
  data() {
    return {};
  },
};
</script>
