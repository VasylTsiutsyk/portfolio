<template>
  <div>
    <header class="header">
      <div class="header__container container">
        <div class="header__wrap">
          <div class="header__row">
            <h1 class="header__page-title">Всі дизайни</h1>

            <div class="header__btn-box">
              <router-link :to="{ name: routeNames.designs.add }" class="btn">Додати дизайн</router-link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <v-designs-section v-if="designs.length > 0" :designs="designs" />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { DesignsSection } from './sections';
import { routeNames } from '@/constants';

export default {
  name: 'HomePage',
  components: {
    VDesignsSection: DesignsSection,
  },
  data() {
    return {
      routeNames,
    };
  },
  computed: {
    ...mapGetters(['designs']),
  },
};
</script>
