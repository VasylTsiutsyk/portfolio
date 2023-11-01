<template>
  <header ref="header" class="header">
    <div class="header__container container">
      <div class="header__wrap">
        <a href="/" class="header__logo" data-scroll-to="home">
          <img src="@/assets/images/logo-alt.svg" alt="Vasyl Tsiutsyk" />
        </a>

        <div class="header__menu menu">
          <nav class="menu__body" :class="{ _active: isActive }" data-menu>
            <ul>
              <li>
                <a href="/" data-scroll-to="home">Home</a>
              </li>
              <li>
                <a href="/#about" data-scroll-to="about">About</a>
              </li>
              <li>
                <a href="/#projects" data-scroll-to="projects">Projects</a>
              </li>
              <li>
                <a href="/#contact" data-scroll-to="contact">Contact</a>
              </li>
            </ul>
          </nav>

          <button
            class="menu__btn"
            :class="{ _active: isActive }"
            data-burger
            aria-label="open menu"
            title="menu"
            @click="handleBurgerClick"
          >
            <span aria-hidden></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { scrollManager } from '@/mixins';
import { routeNames } from '@/constants';

export default {
  name: 'HeaderLayout',
  mixins: [scrollManager],
  data() {
    return {
      isActive: false,
      routeNames,
      scrollListener: null,
      scrollLinks: null,
    };
  },
  mounted() {
    this.scrollHandler();

    this.scrollLinks = document.querySelectorAll('[data-scroll-to]');
    if (this.scrollLinks) {
      this.scrollLinks.forEach((link) => {
        link.addEventListener('click', this.handleScrollLinkClick);
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener);

    if (this.scrollLinks) {
      this.scrollLinks.forEach((link) => {
        link.removeEventListener('click', this.handleScrollLinkClick);
      });
    }
  },
  methods: {
    handleBurgerClick() {
      this.isActive = !this.isActive;
      this.$emit('burger-clicked', this.isActive);
    },
    toggleBurger() {
      this.isActive = !this.isActive;
    },
    scrollHandler() {
      let prevScrollPos = window.pageYOffset;
      const { header } = this.$refs;

      this.scrollListener = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
          header.classList.remove('_hidden');
        } else {
          header.classList.add('_hidden');
        }

        if (currentScrollPos > 0) {
          header.classList.add('_scrolled');
        } else {
          header.classList.remove('_scrolled');
        }

        prevScrollPos = currentScrollPos;
      };

      window.addEventListener('scroll', this.scrollListener);
    },
    handleScrollLinkClick(event) {
      event.preventDefault();
      const targetDataAttr = event.target.getAttribute('data-scroll-to');
      const target = document.querySelector(`[data-scroll-target="${targetDataAttr}"]`);

      if (target) {
        window.scrollTo({
          behavior: 'smooth',
          top: target.offsetTop,
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/base/functions';
@import '@/assets/style/base/mixins';
@import '@/assets/style/base/grid';

// ========== HEADER ========== //
.header {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  border-bottom: px(1) solid transparent;
  width: 100%;
  background-color: transparent;
  transition: background-color $transition-duration-primary, box-shadow $transition-duration-primary;

  &._scrolled {
    background-color: $color-white;
    box-shadow: 0 0 2rem rgba($color-primary, 0.25);
  }

  &__wrap {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(14) 0;
    transition: $transition-primary;

    @include respond-below(md) {
      min-height: 50px;
      padding: rem(12) 0;
    }
  }

  &__logo {
    margin-right: rem(24);
    transition: opacity $transition-duration-primary;

    @include hover {
      opacity: 0.75;
    }

    &:focus,
    &:active {
      opacity: 0.75;
    }

    img {
      display: block;
      pointer-events: none;

      @include respond-below(md) {
        max-width: rem(200);
      }
    }
  }

  &__menu {
    flex: 1 1 auto;

    @include respond-below(md) {
      flex: 0 0 auto;
    }
  }
}

.menu {
  &__arrow {
    display: inline-block;
    margin: 0 0 px(2) px(5);
    border: solid currentcolor;
    border-width: 0 px(2) px(2) 0;
    padding: px(3);
    transform: rotate(45deg);
    transition: transform $transition-duration-primary;
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: px(36);

    @include respond-below(md) {
      position: fixed;
      left: -100%;
      top: 0;
      flex-direction: column;
      align-items: stretch;
      justify-content: start;
      overflow: auto;
      width: 100%;
      height: 100%;
      padding: 120px 30px 30px;
      background-color: rgba($color-white, 0.95);
      transition: left 0.5s;

      &._active {
        left: 0;
      }
    }

    > ul:not(.soc) {
      @include respond-above(md) {
        display: flex;
        align-items: center;
        margin: rem(-8) rem(-16);
      }

      > li {
        position: relative;
        white-space: nowrap;

        @include respond-above(md) {
          margin: rem(8) rem(16);
        }

        &:not(:last-child) {
          @include respond-below(md) {
            border-bottom: px(1) dashed $color-primary;
          }
        }

        > a {
          padding: rem(8) rem(4);
          font-size: rem(18);
          text-transform: capitalize;
          transition: $transition-primary;

          @include respond-below(md) {
            font-size: rem(24);
          }

          @include hover {
            color: $color-primary;
          }

          &:focus,
          &:active {
            color: $color-primary;
          }
        }
      }
    }
  }

  &__sublist {
    position: absolute;
    z-index: 100;
    left: 0;
    background-color: $color-white;
    opacity: 0;
    visibility: hidden;
    transform: translate(0, 10%);
    pointer-events: none;
    transition: $transition-primary;

    > li {
      > a {
        display: block;
        min-width: px(160);
        padding: px(3) px(15);
        transition: color $transition-duration-primary;

        @include hover {
          color: $color-primary;
        }

        &:focus,
        &:active {
          color: $color-primary;
        }
      }
    }
  }

  &__btn {
    display: none;

    @include respond-below(md) {
      position: relative;
      z-index: 100;
      display: block;
      border: none;
      width: rem(42);
      height: rem(26);
      background-color: transparent;
      cursor: pointer;

      span,
      &::before,
      &::after {
        position: absolute;
        left: 0;
        border-radius: rem(2);
        width: 100%;
        height: rem(3);
        background-color: $color-primary;
        transition: $transition-primary;
      }

      &::before,
      &::after {
        content: '';
      }

      &::before {
        top: 0;
      }

      &::after {
        bottom: 0;
      }

      &._active {
        &::before {
          top: 50%;
          transform: rotate(-45deg) translate(0, -50%);
        }

        &::after {
          bottom: 50%;
          transform: rotate(45deg) translate(0, 50%);
        }

        span {
          transform: scale(0) translate(0, -50%);
        }
      }

      span {
        top: 50%;
        transform: scale(1) translate(0, -50%);
      }
    }
  }

  &__btn-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: px(-10);

    @include respond-below(md) {
      flex-direction: column;
      margin-left: px(-10);
    }

    > .btn {
      margin: px(10);
    }
  }
}

/* ===== PC ===== */
body.pc {
  .menu {
    &__body {
      > ul {
        > li {
          @include hover {
            .menu__sublist {
              opacity: 1;
              visibility: visible;
              transform: translate(0, 0);
              pointer-events: all;
            }

            .menu__arrow {
              border-color: $color-primary;
              transform: rotate(225deg);
            }
          }
        }
      }
    }

    &__arrow {
      display: inline-block;
    }

    &__sublist {
      padding: px(10) 0;
      box-shadow: $box-shadow-primary;
    }
  }
}

/* ===== MOBILE ===== */
body.touch {
  .menu {
    &__body {
      > ul {
        > li {
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          &.active {
            .menu__sublist {
              max-height: 300vh;
              pointer-events: all;
            }

            .menu__arrow {
              transform: rotate(225deg);
            }
          }

          > a {
            flex: 1 1 auto;
          }

          .menu__sublist {
            position: static;
            flex: 1 1 100%;
            overflow: hidden;
            max-height: 0;
            padding: 0 0 0 1.125rem;
            background-color: transparent;
            font-size: 1.125rem;
            opacity: 1;
            visibility: visible;
            transform: none;

            > li {
              &:not(:last-child) {
                border-bottom: px(1) dashed $color-primary;
              }

              a {
                padding: 0.625rem 0;
              }
            }
          }
        }
      }
    }

    &__arrow {
      margin: 0;
      border-width: 0 0.125rem 0.125rem 0;
      padding: 0.25rem;
    }
  }
}
</style>
