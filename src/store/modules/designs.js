import DesignImg01 from '@/assets/images/design-01.jpg';
import DesignImg02 from '@/assets/images/design-02.jpg';
import DesignImg03 from '@/assets/images/design-03.jpg';

const appName = 'TEST_TSVV';
const localStorageKey = `${appName}-designs`;

const defaultDesigns = [
  {
    id: '0',
    images: [DesignImg01, DesignImg01],
    title: 'Ostrov',
    viewsCount: 105,
    link: 'example.com',
    show: true,
  },
  {
    id: '1',
    images: [DesignImg02, DesignImg02],
    title: 'Flora',
    viewsCount: 104,
    link: 'example.com',
    show: true,
  },
  {
    id: '2',
    images: [DesignImg03, DesignImg03],
    title: 'SunWear',
    viewsCount: 103,
    link: 'example.com',
    show: true,
  },
  {
    id: '3',
    images: [DesignImg02, DesignImg02],
    title: 'Flora',
    viewsCount: 105,
    link: 'example.com',
    show: true,
  },
  {
    id: '4',
    images: [DesignImg02, DesignImg02],
    title: 'Ostrov',
    viewsCount: 105,
    link: 'example.com',
    show: true,
  },
  {
    id: '5',
    images: [DesignImg03, DesignImg03],
    title: 'Ostrov',
    viewsCount: 105,
    link: 'example.com',
    show: true,
  },
  {
    id: '6',
    images: [DesignImg01, DesignImg01],
    title: 'Ostrov',
    viewsCount: 105,
    link: 'example.com',
    show: true,
  },
  {
    id: '7',
    images: [DesignImg03, DesignImg03],
    title: 'Ostrov',
    viewsCount: 105,
    link: 'example.com',
    show: true,
  },
];

const state = {
  designs: [],
};

const getters = {
  designs: (state) => state.designs,
  designById: (state) => (id) => state.designs.find((design) => design.id === id),
};

const actions = {
  fetchDesigns({ commit }) {
    const storedDesigns = localStorage.getItem(localStorageKey);
    if (storedDesigns) {
      const designs = JSON.parse(storedDesigns);
      commit('SET_DESIGNS', designs);
    } else {
      commit('SET_DESIGNS', defaultDesigns);
    }
  },
  addDesign: ({ commit }, design) => {
    commit('ADD_DESIGN', design);
  },
  editDesign: ({ commit }, design) => {
    commit('EDIT_DESIGN', design);
  },
  deleteDesign({ commit }, designId) {
    commit('DELETE_DESIGN', designId);
  },
};

const mutations = {
  SET_DESIGNS: (state, designs) => {
    state.designs = designs;

    localStorage.setItem(localStorageKey, JSON.stringify(defaultDesigns));
  },
  ADD_DESIGN: (state, design) => {
    state.designs.push(design);

    localStorage.setItem(localStorageKey, JSON.stringify(state.designs));
  },
  EDIT_DESIGN: (state, design) => {
    const designIndex = state.designs.findIndex((d) => d.id === design.id);

    if (designIndex !== -1) {
      state.designs.splice(designIndex, 1, design);
    }

    localStorage.setItem(localStorageKey, JSON.stringify(state.designs));
  },
  DELETE_DESIGN: (state, designId) => {
    const index = state.designs.findIndex((design) => design.id === designId);

    if (index !== -1) {
      state.designs.splice(index, 1);
    }

    localStorage.setItem(localStorageKey, JSON.stringify(state.designs));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
