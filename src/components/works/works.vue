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
          title: 'house cleaning',
          ref: 'http://housecleaning.lime-agency.com.ua',
          src: 'crystalmaids.png',
          alt: 'Screenshot of home page "House Cleaning - Crystalmaids"',
          techs: [
            'html5',
            'css3/scss/bem',
            'adaptive design',
            'js/es6 (scroll animation)',
          ],
        },
        {
          title: 'Aplpha Omega Video',
          ref: 'https://alphaomegavideo.lime-agency.com.ua',
          src: 'aov.png',
          alt: 'Screenshot of home page "Aplpha Omega Video"',
          techs: [
            'html5',
            'css3/scss/bem',
            'adaptive design',
            'js/es6+/gulp.js',
            'swiper.js',
          ],
        },
        {
          title: 'musicok',
          ref: 'http://musikok.lime-agency.com.ua',
          src: 'musicok.png',
          alt: 'Screenshot of home page "musicok"',
          techs: [
            'html5',
            'css3/scss/bem',
            'adaptive design',
            'js/es6+/gulp.js',
            'swiper.js, wow.js, animate.css',
          ],
        },
        {
          title: 'ccc',
          ref: 'https://challengecollections.lime-agency.com.ua',
          src: 'ccc.png',
          alt: 'Screenshot of home page "CCC"',
          techs: [
            'html5',
            'css3/scss/bem',
            'adaptive design',
            'js/es6+/gulp.js',
            'swiper.js',
          ],
        },
        {
          title: 'fjord',
          ref: 'https://vasyltsiutsyk.github.io/fjord/fjord/index.html',
          src: 'fjord.png',
          alt: 'Screenshot of home page "Fjord"',
          techs: [
            'html5',
            'css3/scss/bem',
            'adaptive design',
            'js/es6+',
            'swiper.js',
            'scrollWatch.js',
          ],
        },
        {
          title: 'catering',
          ref: 'https://vasyltsiutsyk.github.io/catering',
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
          ref: 'https://vasyltsiutsyk.github.io/cargo/dist',
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
          ref: 'https://agseosydney.com.au',
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
          ref: 'https://ts-suffix.herokuapp.com',
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
          ref: 'https://vasyltsiutsyk.github.io/DREAMSHARE',
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
      ],
    };
  },
};
</script>

<style lang="scss">
@import 'works.scss';
</style>
