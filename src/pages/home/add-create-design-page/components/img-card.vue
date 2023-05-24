<template>
  <div class="existing-img">
    <img :src="img" :alt="alt" class="existing-img__img" />

    <button class="existing-img__btn" @click="remove(imgIndex)"></button>
  </div>
</template>

<script>
export default {
  name: 'ExistingImgCard',
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    imgIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    remove() {
      this.$emit('removed', this.imgIndex);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/base/functions';
@import '@/assets/style/base/mixins';

.existing-img {
  position: relative;
  overflow: hidden;
  border: rem(1) solid rgba($color-black, 0.2);
  border-radius: rem(3);
  box-shadow: 0 8px 20px rgb(0 0 0 / 15%);

  @include hover {
    .existing-img__btn {
      opacity: 1;
      visibility: visible;
    }
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__btn {
    position: absolute;
    z-index: 10;
    right: 0.25rem;
    bottom: 0.25rem;
    border: none;
    border-radius: rem(3);
    width: rem(24);
    height: rem(24);
    background-color: rgba($color-black, 0.5);
    color: $color-white;
    cursor: pointer;
    transition: $transition-primary;

    @include respond-above(md) {
      opacity: 0;
      visibility: hidden;
    }

    @include hover {
      background-color: $color-black;
    }
  }
}
</style>
