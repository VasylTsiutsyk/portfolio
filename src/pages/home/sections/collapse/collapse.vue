<template name="component-name">
  <section class="collapse-section">
    <ul class="collapse__list">
      <CollapseItem
        v-for="collItem in formattedCollItems"
        :key="collItem.id"
        :coll-item="collItem"
        :style="{ '--animation-order': collItem.order }"
        @toggle-event="toggleCollapse"
      >
      </CollapseItem>
    </ul>
  </section>
</template>

<script>
import CollapseItem from './collapse-item.vue';

export default {
  name: 'Collapse',
  components: {
    CollapseItem,
  },
  data() {
    return {
      formattedCollItems: [],
      collapseItems: [
        {
          title: 'who i am',
          content: [
            {
              id: 0,
              text: "Hi! I'm Frontend developer who has already created many interesting products using HTML/CSS/JS/Vue. And I want to work and grow in your company.",
            },
            {
              id: 1,
              text: 'Languages: Ukrainian - native, Russian - fluent, English - intermediate.',
            },
            {
              id: 2,
              text: 'Prof characteristics: responsibility, communication skills, quick-learning, punctuality, good analytical skills, creative.',
            },
            {
              id: 3,
              text: 'Hobbies: reading, travelling, sports, enjoy life with friends, movies, gaining new skills in development.',
            },
          ],
        },
        {
          title: 'Skills',
          content: [
            {
              id: 0,
              text: 'HTML5',
            },
            {
              id: 1,
              text: 'CSS3',
            },
            {
              id: 2,
              text: 'BEM',
            },
            {
              id: 3,
              text: 'SASS/SCSS',
            },
            {
              id: 4,
              text: 'Native JS/ES6',
            },
            {
              id: 5,
              text: 'Vue.js/Vuex',
            },
            {
              id: 6,
              text: 'Gulp, pug, njk, liquid html',
            },
            {
              id: 7,
              text: 'Git',
            },
          ],
        },
        {
          title: 'academic back',
          content: [
            {
              id: 0,
              text: 'LPML - sept 2012 - may 2015',
            },
            {
              id: 1,
              text: 'LPNU/Bachelor of Science/Food technology - sept 2015 - may 2019',
            },
            {
              id: 2,
              text: 'LPNU/Master of Science/Fermentation and winemaking - sept 2019 - dec 2020',
            },
            {
              id: 3,
              text: 'LOGOS IT academy - sept 2019 - may 2020',
            },
          ],
        },
      ],
    };
  },
  created() {
    this.formattedCollItems = this.collapseItems.map((collItem, index) => ({
      ...collItem,
      isOpen: true,
      id: index,
      order: index + 1,
    }));
  },
  methods: {
    toggleCollapse(id) {
      this.formattedCollItems.forEach((item, index) => {
        const curr = item;
        if (id === index) {
          curr.isOpen = !curr.isOpen;
        } else {
          curr.isOpen = true;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import 'collapse.scss';
</style>
