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
                  <img :src="work.src" :alt="work.alt" />

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
import PinkPalaceImg from '@/assets/images/pinkpalace.jpg';
import FichaImg from '@/assets/images/ficha.jpg';
import CasinoImg from '@/assets/images/casino.jpg';
import PlayTooImg from '@/assets/images/playtoo.jpg';
import AppMobileImg from '@/assets/images/app-mobile.jpg';
import XtzImg from '@/assets/images/xtz.jpg';
import AmifyImg from '@/assets/images/amify.jpg';
import LamontImg from '@/assets/images/lamont.jpg';
import LastshotImg from '@/assets/images/lastshot.jpg';
import FossilImg from '@/assets/images/fossil.jpg';
import AzartImg from '@/assets/images/azart.jpg';
import RefinableImg from '@/assets/images/refinable.jpg';
import AnroImg from '@/assets/images/anro.jpg';
import MalibuImg from '@/assets/images/malibu.jpg';
import MadisonsImg from '@/assets/images/madisons.jpg';
import LucasImg from '@/assets/images/lucas.jpg';
import EspritImg from '@/assets/images/esprit.jpg';
import KoreImg from '@/assets/images/kore.jpg';
import WwtImg from '@/assets/images/wwt.jpg';
import TrademarkImg from '@/assets/images/trademark.jpg';
import CrystalmaidsImg from '@/assets/images/crystalmaids.png';
import MusicokImg from '@/assets/images/musicok.png';
import PodiatryImg from '@/assets/images/podiatry.jpg';
import CccImg from '@/assets/images/ccc.png';
import PensavviImg from '@/assets/images/pensavvi.jpg';

export default {
  name: 'WorksSection',
  data() {
    return {
      works: [
        {
          title: 'Pinkpalace',
          ref: 'https://palace.lime-server.top/index.html',
          src: PinkPalaceImg,
          alt: 'Screenshot of home page "Pinkpalace"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Ficha',
          ref: 'https://ficha.lime-agency.com.ua/home.html',
          src: FichaImg,
          alt: 'Screenshot of home page "Ficha"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Casino',
          ref: 'http://casino.lime-agency.com.ua/',
          src: CasinoImg,
          alt: 'Screenshot of home page "Casino"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js', 'vue.js'],
        },
        {
          title: 'PlayToo',
          ref: 'http://playtoo.lime-server.top/',
          src: PlayTooImg,
          alt: 'Screenshot of home page "PlayToo"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js', 'vue.js'],
        },
        {
          title: 'App Mobile',
          ref: 'https://aap.lime-server.top/',
          src: AppMobileImg,
          alt: 'Screenshot of home page "App Mobile"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js'],
        },
        {
          title: 'XTZ',
          ref: 'http://xtz.news.lime-agency.com.ua/',
          src: XtzImg,
          alt: 'Screenshot of home page "XTZ"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'amify',
          ref: 'http://amify.lime-agency.com.ua/',
          src: AmifyImg,
          alt: 'Screenshot of home page "Amify"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Lamont',
          ref: 'https://lamont.lime-server.top',
          src: LamontImg,
          alt: 'Screenshot of home page "Lamont"',
          techs: ['html/html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js/jquery/fancybox'],
        },
        {
          title: 'LASTSHOT',
          ref: 'https://lastshot.lime-server.top',
          src: LastshotImg,
          alt: 'Screenshot of home page "LASTSHOT"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Fossil Power',
          ref: 'http://fossilpower.lime-server.top/',
          src: FossilImg,
          alt: 'Screenshot of home page "Fossil Power"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Azart',
          ref: 'https://azart.lime-server.top/index.html',
          src: AzartImg,
          alt: 'Screenshot of home page "Azart"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Refinable',
          ref: 'https://rafinable.lime-server.top',
          src: RefinableImg,
          alt: 'Screenshot of home page "Refinable"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'anro',
          ref: 'https://anro.lime-server.top',
          src: AnroImg,
          alt: 'Screenshot of home page "ANRO"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Malibu',
          ref: 'http://malibu.lime-server.top',
          src: MalibuImg,
          alt: 'Screenshot of home page "Malibu"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Pensavvi',
          ref: 'https://pensavvi.lime-server.top',
          src: PensavviImg,
          alt: 'Screenshot of home page "Pensavvi"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Madisons',
          ref: 'https://madisons.org.uk/',
          src: MadisonsImg,
          alt: 'Screenshot of home page "Madisons"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'Lucas',
          ref: 'https://lucas.lime-server.top',
          src: LucasImg,
          alt: 'Screenshot of home page "LUCAS"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js/nouislider.js'],
        },
        {
          title: 'Esprit',
          ref: 'https://esprit.lime-server.top/',
          src: EspritImg,
          alt: 'Screenshot of home page "Esprit"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'KORE',
          ref: 'http://kore-system.lime-server.top',
          src: KoreImg,
          alt: 'Screenshot of home page "KORE"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'WWT Consulting',
          ref: 'https://wtt.lime-server.top/index.html',
          src: WwtImg,
          alt: 'Screenshot of home page "WWT Consulting"',
          techs: ['html/html5', 'css/css3/scss/bem/animate.css', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
        {
          title: 'trademark',
          ref: 'https://trademark.cbddev.com/index.html',
          src: TrademarkImg,
          alt: 'Screenshot of home page "Trademark"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6 (scroll animation)'],
        },
        {
          title: 'house cleaning',
          ref: 'http://housecleaning.lime-agency.com.ua',
          src: CrystalmaidsImg,
          alt: 'Screenshot of home page "House Cleaning - Crystalmaids"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6 (scroll animation)'],
        },
        {
          title: 'musicok',
          ref: 'http://musikok.lime-agency.com.ua',
          src: MusicokImg,
          alt: 'Screenshot of home page "musicok"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6+/gulp.js', 'swiper.js, wow.js, animate.css'],
        },
        {
          title: 'The foot force podiatry',
          ref: 'https://thefootforcepodiatry.lime-server.top',
          src: PodiatryImg,
          alt: 'Screenshot of home page "The foot force podiatry"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'jquery/fancybox'],
        },
        {
          title: 'ccc',
          ref: 'https://challengecollections.lime-agency.com.ua',
          src: CccImg,
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
        dynamicBullets: true,
      },
    });
  },
};
</script>

<style lang="scss">
@import 'works.scss';
</style>
