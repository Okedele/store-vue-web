import axios from 'axios';

const token = localStorage.getItem('token')
const state = {
  productItems: [] 
}

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;
  }
}

const actions = {
  getProductItems ({ commit }, token) {
    axios.get('/products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data.data)
    });
  }
}

const getters = {
  productItems: state => state.productItems,
  productItemFromId: (state) => (id) => {
    return state.productItems.find(productItem => productItem.id === id)
  }
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;
