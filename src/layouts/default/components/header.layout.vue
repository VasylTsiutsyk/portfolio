<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__wrap">
        <router-link :to="{ name: routeNames.home.index }" class="header__logo">
          <img src="@/assets/images/logo.svg" alt="" />
        </router-link>

        <div class="header__menu menu">
          <nav class="menu__body">
            <ul>
              <li>
                <router-link :to="{ name: routeNames.home.index }">Home</router-link>
              </li>

              <li>
                <router-link :to="{ name: routeNames.about.index }">About Us</router-link>
              </li>

              <li>
                <a href="#">Item</a>

                <span class="menu__arrow"></span>

                <ul class="menu__sublist">
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="menu__btn-box">
              <a href="#" class="btn">Button</a>
            </div>
          </nav>

          <button class="menu__btn" data-burger aria-label="open menu" title="menu">
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
    };
  },
  methods: {
    handleBurgerClick() {
      this.isActive = !this.isActive;
      this.$emit('burger-clicked', this.isActive);
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
  z-index: 100;
  left: 0;

  // position: fixed;
  top: 0;
  border-bottom: px(1) solid transparent;
  width: 100%;
  background-color: transparent;
  transition: border $transition-duration-primary;

  &--scrolled {
    border-color: $color-black;
  }

  &__wrap {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: px(70);
    padding: px(20) 0;
    transition: $transition-primary;

    @include respond-below(md) {
      min-height: 50px;
      padding: 10px 0;
    }
  }

  &__logo {
    margin-right: px(30);
    transition: opacity $transition-duration-primary;

    @include hover {
      opacity: 0.75;
    }

    &:focus,
    &:active {
      opacity: 0.75;
    }

    img {
      line-height: 1;
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

      &.active {
        left: 0;
      }
    }

    > ul:not(.soc) {
      @include respond-above(md) {
        display: flex;
        align-items: center;
        margin: px(-10);
      }

      > li {
        position: relative;
        white-space: nowrap;

        @include respond-above(md) {
          margin: px(10);
        }

        &:not(:last-child) {
          @include respond-below(md) {
            border-bottom: px(1) dashed $color-primary;
          }
        }

        > a {
          padding: px(10) px(5);
          text-transform: capitalize;
          transition: $transition-primary;

          @include respond-below(lg) {
            font-size: 15px;
          }

          @include respond-below(md) {
            font-size: 20px;
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
      width: 30px;
      height: 18px;
      background-color: transparent;
      cursor: pointer;

      span,
      &::before,
      &::after {
        position: absolute;
        left: 0;
        width: 100%;
        height: 10%;
        background-color: $color-black;
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

      &.active {
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
