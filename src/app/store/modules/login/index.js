// import axios from 'axios';

const state = {
  token: null,
  loading: false,
  email: '',
  password: ''
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token;
  },
  LOGIN_PENDING (state) {
    state.loading = true;
  },
  LOGIN_SUCCESS (state) {
    state.loading = false;
  },
  UPDATE_EMAIL (state, email) {
    state.email = email
  },
  UPDATE_PASSWORD (state, password) {
    state.password = password
  }
}

const actions = {
  login ({ commit, state }) {
    commit('LOGIN_PENDING');
    return axios.post('/login', {
      email: state.email,
      password: state.password,
    }).then((response) => {
      localStorage.setItem("token", response.data.data.token);
      commit('SET_TOKEN', response.data.data.token);
    }).catch(error => {
      alert(error.response.data.message)
    });
  },
  logout ({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem("token");
      commit('SET_TOKEN', null);
      resolve();
    });
  }
}

const getters = {
  token: state => state.token,
  loading: state => state.loading,
  email: state => state.email,
  password: state => state.password
}

const loginModule = {
  state,
  mutations,
  actions,
  getters
}

export default loginModule;
