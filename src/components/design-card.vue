<template>
  <div class="design-card" @click="openDetails">
    <div class="design-card__img">
      <img :src="card.images[0]" :alt="card.title" />
    </div>

    <div class="design-card__text">
      <div class="design-card__meta">
        <div class="design-card__views">
          {{ card.viewsCount }}
        </div>

        <h3 class="design-card__title">
          {{ card.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { routeNames } from '@/constants';

export default {
  name: 'DesignCardComponent',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openDetails() {
      this.$router.push({
        name: routeNames.designs.details,
        params: {
          id: this.card.id,
        },
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/base/functions';
@import '@/assets/style/base/mixins';

.design-card {
  cursor: pointer;

  @include hover {
    .design-card__img {
      img {
        transform: scale(1.1);
      }
    }
  }

  &__img {
    position: relative;
    overflow: hidden;
    border-radius: rem(3);
    padding-bottom: 133.33%;
    background-color: #c4c4c4;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
  }

  &__text {
    padding: 1rem 0;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__views {
    border-radius: 0.5rem;
    padding: 0.125rem rem(5);
    background-color: $color-white;
    font-size: rem(11);
    font-weight: 400;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    color: $color-black;
  }

  &__title {
    font-size: 1rem;
    font-weight: 400;
  }
}
</style>
