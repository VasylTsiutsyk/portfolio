<template>
  <section data-scroll-target="projects" class="section text-center">
    <div class="section__container container">
      <div class="section__wrap">
        <h2 class="section__title">My Recent Work</h2>

        <div class="section__body">
          <p>
            Here are a few past design projects I've worked on. <br />
            Want to see more?
            <a href="mailto:v.tsyutsyk@gmail.com"> Email me.</a>
          </p>
        </div>

        <ul class="works-list">
          <li v-for="(work, workIndex) in works" :key="workIndex">
            <div class="work-card">
              <h3 class="work-card__title">{{ work.title }}</h3>

              <div class="work-card__link-box">
                <a :href="work.ref" target="_blank">
                  <img :src="work.src" :alt="work.alt" />

                  <div class="work-card__details">
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
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
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
import CntxtImg from '@/assets/images/cntxt.jpg';
import WearImg from '@/assets/images/made-to-wear.jpg';

export default {
  name: 'WorksSection',
  data() {
    return {
      works: [
        {
          title: 'CNTXT',
          ref: 'https://cntxt.com/',
          src: CntxtImg,
          alt: 'Screenshot of home page "CNTXT"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/swiper.js/lenis.js/choices.js'],
          year: 2023,
        },
        {
          title: 'Made To Wear',
          ref: 'https://wear.lime-server.top/',
          src: WearImg,
          alt: 'Screenshot of home page "Made To Wear"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/swiper.js/choices.js'],
          year: 2023,
        },
        {
          title: 'Ficha',
          ref: 'https://ficha.lime-agency.com.ua/home.html',
          src: FichaImg,
          alt: 'Screenshot of home page "Ficha"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/swiper.js/dark theme'],
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
          title: 'Pinkpalace',
          ref: 'https://palace.lime-server.top/index.html',
          src: PinkPalaceImg,
          alt: 'Screenshot of home page "Pinkpalace"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/wow.js/swiper.js'],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import 'works.scss';
</style>
