import axios from 'axios';


const state = {
  cartItems: []
}

const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems = payload;
  }
}

const actions = {
  getCartItems ({ commit }, token) {
    axios.get('/cart', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data.data)
    });
  },
  addCartItem ({ commit }, cartItem) {
    const token = localStorage.getItem("token");
    return axios.post('/cart', {
          product_id: cartItem
        },
        {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data.data)
    });
  },
  removeCartItem ({ commit }, cartItem) {
    const token = localStorage.getItem("token");
    axios.post('/cart/delete', {
          product_id: cartItem
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data.data)
    });
  },
  removeAllCartItems ({ commit }) {
    const token = localStorage.getItem("token");
    axios.post('/cart/delete/all',{}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data.data)
    });
  },
  checkout ({ commit }) {
    const token = localStorage.getItem("token");
    axios.post('/cart/checkout',{}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data.data)
    });
  }
}

const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (Number(cartItem.qty) * cartItem.price) + acc;
    }, 0).toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return Number(cartItem.qty) + acc;
    }, 0);
  }
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}

export default cartModule;
