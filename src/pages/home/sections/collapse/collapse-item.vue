<template>
  <li class="collapse__item" :class="isClosed">
    <button class="collapse__header" :class="isActive" @click="toggleColl">
      {{ collItem.title }}
      <span class="icon"></span>
    </button>
    <div class="collapse__content">
      <ul>
        <li v-for="(item, index) in collItem.content" :key="index" class="collapse__content-item">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    collItem: {
      required: true,
      type: Object,
    },
  },
  computed: {
    isClosed() {
      return {
        'is-closed': this.collItem.isOpen,
      };
    },
    isActive() {
      return {
        'is-active': !this.collItem.isOpen,
      };
    },
  },
  methods: {
    toggleColl() {
      this.$emit('toggle-event', this.collItem.id);
    },
  },
};
</script>
