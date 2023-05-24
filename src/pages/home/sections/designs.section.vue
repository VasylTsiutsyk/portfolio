<template>
  <section class="section">
    <div class="section__container container">
      <div class="section__wrap pt-0">
        <div class="row">
          <div v-for="design in designs" :key="design.id" class="col-xs-6 col-sm-4 col-md-3 mb-3">
            <design-card :card="design" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { DesignCard } from '@/components';

export default {
  name: 'DesignsSection',
  components: {
    DesignCard,
  },
  props: {
    designs: {
      type: Array,
      required: true,
    },
  },
  computed: {
    shownDesigns() {
      return this.designs.filter((d) => d.show);
    },
  },
};
</script>
