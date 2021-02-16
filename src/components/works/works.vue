<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title title--white">works</h2>
      <div class="slide" v-for="(work, index) in works" :key="index">
        <h3 class="works__title">{{ work.title }}</h3>
        <div class="works__link-box">
          <a
            class="works__link"
            :href="work.ref"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="works__overlay"></div>
            <img :src="'/img/' + work.src" :alt="work.alt" />
            <div class="works__details">
              <h3 class="works__details-title">used technologies:</h3>
              <ul>
                <li v-for="(tech, index) in work.techs" :key="index">
                  {{ tech }}
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          title: 'catering',
          ref: 'https://vasyltsiutsyk.github.io/catering/',
          src: 'catering.png',
          alt: 'Screenshot of home page "Catering"',
          techs: [
            'html5',
            'css3/scss/bem',
            'adaptive design',
            'js/es6+',
            'swiper.js',
          ],
        },
        {
          title: 'cargo',
          ref: 'https://vasyltsiutsyk.github.io/cargo/dist/',
          src: 'cargo.png',
          alt: 'Screenshot of home page "Cargo"',
          techs: [
            'html5',
            'css3/scss/bem',
            'adaptive design',
            'js/es6+/scroll animation',
            'swiper.js',
          ],
        },
        {
          title: 'agseo',
          ref: 'https://vasyltsiutsyk.github.io/agseo/dist/',
          src: 'agseo.png',
          alt: 'Screenshot of home page "AgSEO"',
          techs: [
            'html5',
            'css3/scss/bem',
            'adaptive design',
            'jquery/fancybox',
          ],
        },
        {
          title: 'suffix',
          ref: 'https://ts-suffix.herokuapp.com/',
          src: 'suffix.jpg',
          alt: 'Screenshot of home page "Suffix"',
          techs: [
            'html5',
            'css3/scss/bem',
            'vue.js/vuex',
            'axios',
            'i18n',
            'squidex',
          ],
        },
        {
          title: 'dreamshare',
          ref: 'https://vasyltsiutsyk.github.io/DREAMSHARE/',
          src: 'dreamshare.jpg',
          alt: 'Screenshot of home page "Dreamshare"',
          techs: ['html5', 'css3/scss/bem', 'js/es6 (scroll animation)'],
        },
        {
          title: 'crm',
          ref: 'https://tsiutsyk-crm.web.app/',
          src: 'crm.jpg',
          alt: 'Screenshot of home page "crm"',
          techs: [
            'html',
            'css3/bem',
            'vue.js/vuex',
            'vuelidate',
            'firebase',
            'materialize',
          ],
        },
        {
          title: 'main',
          ref: 'https://vasyltsiutsyk.github.io/Main/dist/index.html',
          src: 'main.jpg',
          alt: 'Screenshot of "Main"',
          techs: [
            'html5',
            'css3/scss/bem',
            'js/es6 (parallax.js)',
            'gulp',
            'swiper',
            'svg animations',
          ],
        },
        {
          title: 'text editor',
          ref: 'https://vasyltsiutsyk.github.io/JS_CW2/',
          src: 'txt-editor.jpg',
          alt: 'Screenshot of "Text editor"',
          techs: ['html5', 'css3', 'js/es6'],
        },
        {
          title: 'slider',
          ref: 'https://vasyltsiutsyk.github.io/slider/',
          src: 'slider.jpg',
          alt: 'Screenshot of "Slider"',
          techs: ['html5', 'css3', 'js/es6'],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import 'works.scss';
</style>
