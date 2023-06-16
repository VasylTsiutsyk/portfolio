<template>
  <section class="section works">
    <div class="section__wrap">
      <div class="container">
        <h2 class="section__title title--white">works</h2>

        <div ref="slider" class="swiper">
          <div class="swiper-wrapper">
            <div v-for="(work, workIndex) in works" :key="workIndex" class="swiper-slide">
              <h3 class="works__title">{{ work.title }}</h3>

              <div class="works__link-box">
                <a :href="work.ref" target="_blank">
                  <img :src="'/img/' + work.src" :alt="work.alt" />

                  <div class="works__details">
                    <h3>Used Technologies:</h3>

                    <ul>
                      <li v-for="(tech, techIndex) in work.techs" :key="techIndex">
                        {{ tech }}
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

export default {
  name: 'WorksSection',
  data() {
    return {
      works: [
        {
          title: 'Pinkpalace',
          ref: 'https://palace.lime-server.top/index.html',
          src: 'pinkpalace.jpg',
          alt: 'Screenshot of home page "Pinkpalace"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Ficha',
          ref: 'https://ficha.lime-agency.com.ua/home.html',
          src: 'ficha.jpg',
          alt: 'Screenshot of home page "Ficha"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Casino',
          ref: 'http://casino.lime-agency.com.ua/',
          src: 'casino.jpg',
          alt: 'Screenshot of home page "Casino"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js', 'vue.js'],
        },
        {
          title: 'PlayToo',
          ref: 'http://playtoo.lime-server.top/',
          src: 'playtoo.jpg',
          alt: 'Screenshot of home page "PlayToo"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js', 'vue.js'],
        },
        {
          title: 'App Mobile',
          ref: 'https://aap.lime-server.top/',
          src: 'app-mobile.jpg',
          alt: 'Screenshot of home page "App Mobile"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js'],
        },
        {
          title: 'XTZ',
          ref: 'http://xtz.news.lime-agency.com.ua/',
          src: 'xtz.jpg',
          alt: 'Screenshot of home page "XTZ"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'amify',
          ref: 'http://amify.lime-agency.com.ua/',
          src: 'amify.jpg',
          alt: 'Screenshot of home page "Amify"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Lamont',
          ref: 'https://lamont.lime-server.top',
          src: 'lamont.jpg',
          alt: 'Screenshot of home page "Lamont"',
          techs: ['html/html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js/jquery/fancybox'],
        },
        {
          title: 'LASTSHOT',
          ref: 'https://lastshot.lime-server.top',
          src: 'lastshot.jpg',
          alt: 'Screenshot of home page "LASTSHOT"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Fossil Power',
          ref: 'http://fossilpower.lime-server.top/',
          src: 'fossil.jpg',
          alt: 'Screenshot of home page "Fossil Power"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Azart',
          ref: 'https://azart.lime-server.top/index.html',
          src: 'azart.jpg',
          alt: 'Screenshot of home page "Azart"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Refinable',
          ref: 'https://rafinable.lime-server.top',
          src: 'refinable.jpg',
          alt: 'Screenshot of home page "Refinable"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'anro',
          ref: 'https://anro.lime-server.top',
          src: 'anro.jpg',
          alt: 'Screenshot of home page "ANRO"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Malibu',
          ref: 'http://malibu.lime-server.top',
          src: 'malibu.jpg',
          alt: 'Screenshot of home page "Malibu"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Pensavvi',
          ref: 'https://pensavvi.lime-server.top',
          src: 'pensavvi.jpg',
          alt: 'Screenshot of home page "Pensavvi"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Madisons',
          ref: 'https://madisons.org.uk/',
          src: 'madisons.jpg',
          alt: 'Screenshot of home page "Madisons"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Lucas',
          ref: 'https://lucas.lime-server.top',
          src: 'lucas.jpg',
          alt: 'Screenshot of home page "LUCAS"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js/nouislider.js'],
        },
        {
          title: 'Esprit',
          ref: 'https://esprit.lime-server.top/',
          src: 'esprit.jpg',
          alt: 'Screenshot of home page "Esprit"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'KORE',
          ref: 'http://kore-system.lime-server.top',
          src: 'kore.jpg',
          alt: 'Screenshot of home page "KORE"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'WWT Consulting',
          ref: 'https://wtt.lime-server.top/index.html',
          src: 'wwt.jpg',
          alt: 'Screenshot of home page "WWT Consulting"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'trademark',
          ref: 'https://trademark.cbddev.com/index.html',
          src: 'trademark.jpg',
          alt: 'Screenshot of home page "Trademark"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6 (scroll animation)'],
        },
        {
          title: 'house cleaning',
          ref: 'http://housecleaning.lime-agency.com.ua',
          src: 'crystalmaids.png',
          alt: 'Screenshot of home page "House Cleaning - Crystalmaids"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6 (scroll animation)'],
        },
        {
          title: 'musicok',
          ref: 'http://musikok.lime-agency.com.ua',
          src: 'musicok.png',
          alt: 'Screenshot of home page "musicok"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6+/gulp.js', 'swiper.js, wow.js, animate.css'],
        },
        {
          title: 'The foot force podiatry',
          ref: 'https://thefootforcepodiatry.lime-server.top',
          src: 'podiatry.jpg',
          alt: 'Screenshot of home page "The foot force podiatry"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'jquery/fancybox'],
        },
        {
          title: 'ccc',
          ref: 'https://challengecollections.lime-agency.com.ua',
          src: 'ccc.png',
          alt: 'Screenshot of home page "CCC"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6+/gulp.js', 'swiper.js'],
        },
      ],
    };
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
};
</script>

<style lang="scss">
@import 'works.scss';
</style>
