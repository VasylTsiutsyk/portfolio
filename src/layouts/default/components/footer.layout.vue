<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__wrap">
        <nav class="footer__nav">
          <ul class="footer__menu">
            <li>
              <router-link to="#">Home</router-link>
            </li>
            <li>
              <router-link to="#">Games</router-link>
            </li>
            <li>
              <router-link to="#">Bonuses</router-link>
            </li>
            <li>
              <router-link to="#">Tournaments</router-link>
            </li>
            <li>
              <router-link to="#">Help center</router-link>
            </li>
            <li>
              <router-link to="#">Blog</router-link>
            </li>
            <li>
              <router-link to="#">Request a feature</router-link>
            </li>
          </ul>
        </nav>

        <div class="footer__copyright">copyright &copy; {{ new Date().getFullYear() }}</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterLayout',
};
</script>

<style lang="scss">
.footer {
  display: block;
}
</style>
