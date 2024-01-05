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
import FinancialCertaintyImg from '@/assets/images/financial-certainty.jpg';
import MaxMagicImg from '@/assets/images/max-magic.jpg';
import HealthcareAbroadImg from '@/assets/images/healthcare-abroad.jpg';
import XStreamImg from '@/assets/images/x-stream.jpg';
import DaraImg from '@/assets/images/dara.jpg';
import BelleBathRoomsImg from '@/assets/images/bellebathrooms.jpg';

export default {
  name: 'WorksSection',
  data() {
    return {
      works: [
        {
          title: 'Dara LP',
          ref: 'https://dara.lime-server.top/landing/',
          src: DaraImg,
          alt: 'Screenshot of home page "Dara LP"',
          techs: ['html5', 'css3 / scss / bem', 'js / es6+', 'swiper.js / fancybox.js / aos.js / simpleParallax.js'],
          year: 2023,
        },
        {
          title: 'BelleBathRooms',
          ref: 'https://bellebathrooms.lime-server.top/home.html',
          src: BelleBathRoomsImg,
          alt: 'Screenshot of home page "BelleBathRooms"',
          techs: ['html5', 'css3 / scss / bem', 'js / es6+', 'swiper.js / fancybox.js / aos.js'],
          year: 2023,
        },
        {
          title: 'Healthcare Abroad',
          ref: 'https://healthcare-abroad.lime-server.top/home.html',
          src: HealthcareAbroadImg,
          alt: 'Screenshot of home page "Healthcare Abroad"',
          techs: ['html5', 'css3 / scss / bem', 'js / es6+', 'GSAP / swiper.js / lenis.js / choices.js'],
          year: 2023,
        },
        {
          title: 'X-Stream',
          ref: 'https://x-stream.lime-server.top/',
          src: XStreamImg,
          alt: 'Screenshot of home page "X-Stream"',
          techs: ['html5', 'css3 / scss / bem', 'js / es6+', 'parallax', 'swiper.js / aos.js / fancybox'],
          year: 2023,
        },
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
          year: 2023,
        },
        {
          title: 'Casino',
          ref: 'http://casino.lime-agency.com.ua/',
          src: CasinoImg,
          alt: 'Screenshot of home page "Casino"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js', 'vue.js'],
          year: 2023,
        },
        {
          title: 'Creating Financial Certainty',
          ref: 'https://creating-financial-certainty.lime-server.top/',
          src: FinancialCertaintyImg,
          alt: 'Screenshot of home page "Creating Financial Certainty"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js / ES6+ / aos.js / swiper.js / parallax-scroll'],
          year: 2023,
        },
        {
          title: 'Max Magic',
          ref: 'https://maxmagic.lime-server.top/home.html',
          src: MaxMagicImg,
          alt: 'Screenshot of home page "Max Magic"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'JS / ES6+ / aos.js / swiper.js / choices.js'],
          year: 2023,
        },
        {
          title: 'PlayToo',
          ref: 'http://playtoo.lime-server.top/',
          src: PlayTooImg,
          alt: 'Screenshot of home page "PlayToo"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js', 'vue.js'],
          year: 2023,
        },
        {
          title: 'App Mobile',
          ref: 'https://aap.lime-server.top/',
          src: AppMobileImg,
          alt: 'Screenshot of home page "App Mobile"',
          techs: ['html5', 'css3/scss/bem', 'adaptive design', 'js/es6/aos.js/swiper.js'],
          year: 2023,
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
      ],
    };
  },
};
</script>

<style lang="scss">
@import 'works.scss';
</style>
