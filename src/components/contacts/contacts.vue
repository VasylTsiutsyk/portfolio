<template name="component-name">
  <section class="section contacts">
    <div class="container">
      <h2 class="section__title title--white tt-normal type-text">
        <span class="line">Let`s connect <span class="blinking-cursor">|</span></span>
      </h2>
      <nav class="contacts__nav">
        <ul class="contacts__list">
          <li class="contacts__item">
            <ul>
              <li v-for="(contact, index) in contacts" :key="index">
                <h3>{{ contact.title }}</h3>
                <a :href="contact.ref" class="contacts__link" target="_blank">{{
                  contact.value
                }}</a>
              </li>
            </ul>
          </li>

          <li class="contacts__item social">
            <ul class="social__list">
              <li
                class="social__item"
                v-for="(soc, index) in socials"
                :key="index"
              >
                <a :href="soc.ref" class="social__link" target="_blank">
                  <i class="fab fa-2x" :class="soc.icon"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          ref: 'mailto:v.tsyutsyk@gmail.com',
          title: 'email',
          value: 'v.tsyutsyk@gmail.com',
        },
        { ref: 'tel:+380500749283', title: 'phone', value: '+380500749283' },
      ],
      socials: [
        { ref: 'https://join.skype.com/invite/lMuDkyuL3xx1', icon: 'fa-skype' },
        { ref: 'https://github.com/VasylTsiutsyk', icon: 'fa-github' },
        {
          ref: 'https://www.linkedin.com/in/vasyl-tsiutsyk-85147317b/',
          icon: 'fa-linkedin',
        },
        { ref: 'https://telegram.me/tsiutsyk', icon: 'fa-telegram' },
        { ref: 'https://www.instagram.com/v_tsiutsyk/', icon: 'fa-instagram' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import 'contacts.scss';
</style>
