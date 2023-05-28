const appName = import.meta.env.APP_NAME;
const localStorageKey = `${appName}-designs`;

const defaultDesigns = [];

const state = {
  designs: [],
};

const getters = {
  designs: (state) => state.designs,
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
