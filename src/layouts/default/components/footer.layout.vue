<template>
  <footer data-scroll-target="contact" class="footer">
    <div class="footer__container container">
      <div class="footer__wrap">
        <div class="footer__form footer-form">
          <div class="footer-form__row">
            <div class="footer-form__col">
              <h3 class="footer-form__title">Start a project</h3>
            </div>

            <div class="footer-form__col">
              <div class="footer-form__body">
                <p>
                  Interested in working together? <br />
                  We should queue up a time to chat. I’ll buy the coffee.
                </p>
              </div>
            </div>

            <div class="footer-form__col">
              <a href="https://telegram.me/tsiutsyk" target="_blank" class="footer-form__btn btn btn--green">
                <i class="fab fa-telegram"></i> Let's do this
              </a>
            </div>
          </div>
        </div>

        <a href="/" class="footer__logo" data-scroll-to="home">
          <img src="@/assets/images/logo-alt.svg" alt="" />
        </a>

        <div class="footer__body">
          <p>Living, learning, & leveling up one day at a time.</p>
        </div>

        <ul class="footer__soc">
          <li v-for="(soc, socIndex) in socials" :key="socIndex">
            <a :href="soc.ref" target="_blank">
              <i class="fab" :class="soc.icon"></i>
            </a>
          </li>
        </ul>

        <small class="footer__copyright"> Handcrafted by me © {{ new Date().getFullYear() }} </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterLayout',
  data() {
    return {
      contacts: [
        {
          ref: 'mailto:v.tsyutsyk@gmail.com',
          title: 'email',
          value: 'v.tsyutsyk@gmail.com',
        },
        {
          ref: 'tel:+380500749283',
          title: 'phone',
          value: '+380500749283',
        },
      ],
      socials: [
        {
          ref: 'https://join.skype.com/invite/lMuDkyuL3xx1',
          icon: 'fa-skype',
        },
        {
          ref: 'https://github.com/VasylTsiutsyk',
          icon: 'fa-github',
        },
        {
          ref: 'https://www.linkedin.com/in/vasyl-tsiutsyk-85147317b/',
          icon: 'fa-linkedin',
        },
        {
          ref: 'https://telegram.me/tsiutsyk',
          icon: 'fa-telegram',
        },
        {
          ref: 'https://www.instagram.com/v_tsiutsyk/',
          icon: 'fa-instagram',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/base/functions';
@import '@/assets/style/base/mixins';
@import '@/assets/style/base/grid';

.footer {
  position: relative;
  display: block;
  padding-top: rem(9);
  background-color: $color-primary;
  text-align: center;
  color: $color-white;

  &__wrap {
    padding: rem(64) 0 rem(42);
  }

  &__form {
    margin: 0 auto rem(56);
    max-width: rem(1200);
  }

  &__logo {
    margin-bottom: rem(32);

    img {
      display: block;
      pointer-events: none;
    }
  }

  &__body {
    margin: 0 auto rem(42);
    max-width: rem(320);
    font-family: $font-family-secondary;
    font-size: rem(24);
    font-weight: 400;
    line-height: 1.2;
    color: rgba($color-white, 0.65);
  }

  &__soc {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: rem(32);
    gap: rem(8) rem(16);

    > li {
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        border: rem(2) solid $color-white;
        border-radius: 50%;
        width: rem(48);
        height: rem(48);
        font-size: rem(22);
        transition: background-color $transition-duration-primary, color $transition-duration-primary;

        @include hover {
          background-color: $color-white;
          color: $color-primary;
        }
      }
    }
  }

  &__copyright {
    font-size: rem(16);
    color: rgba($color-white, 0.65);
  }
}

.footer-form {
  border-radius: rem(12);
  padding: 3.5rem 2rem;
  background-color: #141c3a;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #141c3a;

  @include respond-below(md) {
    padding: rem(32) rem(24);
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: rem(24);

    @include respond-below(sm) {
      flex-direction: column;
      text-align: center;
    }
  }

  &__title {
    font-size: rem(28);
    color: $color-white;
  }

  &__body {
    font-size: rem(18);
    text-align: center;
  }
}
</style>
