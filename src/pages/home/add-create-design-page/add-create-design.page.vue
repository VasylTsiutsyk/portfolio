<template>
  <div>
    <header class="header">
      <div class="header__container container">
        <div class="header__wrap">
          <div class="header__row">
            <label class="header__toggle toggle">
              <input v-model="model.show" type="checkbox" class="toggle__input" />

              <span class="toggle__slider"></span>

              <span class="toggle__label">
                {{ model.show ? 'Опублікований' : 'Неопублікований' }}
              </span>
            </label>

            <div class="header__btn-box">
              <button v-if="!isNewDesign" class="btn btn--delete" @click="removeDesign">Видалити</button>

              <button class="btn" @click="saveChanges">Зберегти і вийти</button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="section__container container">
        <div class="section__wrap">
          <validation-observer ref="observer">
            <div class="row">
              <div class="col-md-7">
                <ul class="existing-images mb-5">
                  <li v-for="(img, imgIndex) in model.images" :key="imgIndex">
                    <img-card :img="img" :img-index="imgIndex" :alt="model.title" @removed="removeImageFromExisting" />
                  </li>

                  <li>
                    <label class="file-input">
                      <input type="file" @change="addNewImage" />
                    </label>
                  </li>
                </ul>

                <div class="row">
                  <div class="col-md-4 mb-3">
                    <validation-provider v-slot="{ errors }" name="Views" rules="required|numeric">
                      <div class="input">
                        <input v-model="model.viewsCount" type="text" placeholder="Views" />
                      </div>

                      <span class="error">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                  </div>

                  <div class="col-md-8 mb-3">
                    <validation-provider v-slot="{ errors }" name="Title" rules="required">
                      <div class="input">
                        <input v-model="model.title" type="text" placeholder="Title" />
                      </div>

                      <span class="error">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                  </div>

                  <div class="col-md-12">
                    <validation-provider v-slot="{ errors }" name="Link" rules="required">
                      <div class="input">
                        <input v-model="model.link" type="text" placeholder="Link" />
                      </div>

                      <span class="error">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                  </div>
                </div>
              </div>
            </div>
          </validation-observer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { routeNames } from '@/constants';
import imgCard from './components/img-card.vue';

function getDefaultDesignModel() {
  return {
    id: Date.now(),
    title: '',
    viewsCount: 0,
    images: [],
    link: '',
    show: false,
  };
}

export default {
  name: 'DesignDetailsPage',
  components: {
    imgCard,
  },
  data() {
    return {
      designId: this.$route.params.id,
      model: getDefaultDesignModel(),
    };
  },
  computed: {
    ...mapGetters(['designs']),
    isNewDesign() {
      return !this.designId || this.designId === 'add';
    },
    design() {
      if (this.isNewDesign) {
        const newDesign = getDefaultDesignModel();
        return newDesign;
      }

      const { designId } = this;
      return this.designs.find((design) => design.id === designId);
    },
  },
  watch: {
    design: {
      handler(value) {
        if (value) {
          this.model = { ...value };
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(['editDesign', 'addDesign', 'deleteDesign']),
    removeImageFromExisting(index) {
      this.model.images = this.model.images.filter((_, imgIndex) => imgIndex !== index);
    },
    addNewImage(event) {
      const { files } = event.target;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = () => {
          this.model.images = [...this.model.images, reader.result];
        };

        reader.readAsDataURL(file);
      }
    },
    async saveChanges() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }

      const design = {
        ...this.model,
      };

      if (this.isNewDesign) {
        this.addDesign(design);
      } else {
        this.editDesign(design);
      }

      this.$router.push({
        name: routeNames.designs.index,
      });
    },
    removeDesign() {
      this.deleteDesign(this.designId);

      this.$router.push({
        name: routeNames.designs.index,
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/base/functions';
@import '@/assets/style/base/mixins';

.existing-images {
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem;

  > li {
    flex: 0 0 20%;
    max-width: 20%;
    padding: 0.25rem;
  }
}
</style>
