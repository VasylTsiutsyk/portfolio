<template>
  <section data-scroll-target="home" class="hero">
    <div class="hero__container container">
      <div class="hero__wrap">
        <div class="hero__content">
          <h1 class="hero__title" data-aos="fade-up">Hey, I'm Vasyl Tsiutsyk!</h1>

          <div class="hero__body text-block" data-aos="fade-up" data-aos-delay="200">
            <p>
              A focused <strong>Frontend Web Developer</strong> building the Frontend of Websites and Web Applications
              that leads to the success of the overall product
            </p>
          </div>

          <div class="hero__avatar">
            <img src="@/assets/images/mf-avatar.svg" />
          </div>

          <div class="hero__btn-box" data-aos="fade-up" data-aos-delay="400">
            <a href="#projects" data-scroll-to="projects" class="btn btn--animate">Projects</a>
          </div>
        </div>
      </div>

      <div class="hero__container">
        <div class="hero__devices">
          <img src="@/assets/images/hero-devices.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/base/mixins';
@import '@/assets/style/base/functions';

// ========== Section Hero ========== //
.hero {
  &__wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: rem(120) 0 rem(64);
    text-align: center;
  }

  &__content {
    max-width: 85rem;
  }

  &__title {
    margin-bottom: rem(28);
    font-size: rem(42);
    font-weight: 800;
  }

  &__body {
    margin: 0 auto rem(32);
    max-width: rem(800);
    font-size: rem(20);

    &:not(:last-child) {
      margin-bottom: rem(36);
    }
  }

  &__avatar {
    margin: 0 auto;
    margin-bottom: rem(36);

    @include respond-below(md) {
      max-width: rem(180);
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }

  &__devices {
    margin: 0 auto;
    max-width: rem(800);

    img {
      display: block;
      margin: 0 auto;
    }
  }

  &__scroll-down {
    position: absolute !important;
    left: 50%;
    bottom: 3%;
    transform: translateX(-50%);
  }
}
</style>
