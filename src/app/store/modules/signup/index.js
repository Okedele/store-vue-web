// import axios from 'axios';

const state = {
    token: null,
    loading: false,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
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
    UPDATE_FIRSTNAME (state, firstname) {
        state.firstname = firstname
    },
    UPDATE_LASTNAME (state, lastname) {
        state.lastname = lastname
    },
    UPDATE_EMAIL (state, email) {
        state.email = email
    },
    UPDATE_PHONE (state, phone) {
        state.phone = phone
    },
    UPDATE_PASSWORD (state, password) {
        state.password = password
    }
}

const actions = {
    signup ({ commit, state }) {
        return axios.post('/signup',{
            first_name: state.firstname,
            last_name: state.lastname,
            email: state.email,
            phone: state.phone,
            password: state.password,
        }).then((response) => {
            localStorage.setItem("token", response.data.data.token);
            commit('SET_TOKEN', response.data.data.token);
        }).catch(() => {
            alert('There was a problem creating the user, please try again and fill the form correctly.')
            this.$router.push({ path: '/signup' });
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
    firstname: state => state.firstname,
    lastname: state => state.lastname,
    email: state => state.email,
    phone: state => state.phone,
    password: state => state.password
}

const signupModule = {
    state,
    mutations,
    actions,
    getters
}

export default signupModule;
