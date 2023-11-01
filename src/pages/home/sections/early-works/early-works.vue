<template>
  <section class="section text-center">
    <div class="section__container container">
      <div class="section__wrap">
        <h2 class="section__title">My Early Projects</h2>

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
};
</script>
