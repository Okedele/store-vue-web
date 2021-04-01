<template>
  <div id="login" class="box has-text-centered">
    <h2 class="title">VUE STORE</h2>
    <form class="ui form" @submit.prevent="login">
    <!-- Email Field -->
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input v-model="email" class="input" type="email" placeholder="Email" required>
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </div>
    </div>
    <!-- Password Field -->
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input v-model="password" class="input" type="password" placeholder="Password" required>
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </div>
    </div>
    <button class="button is-link">
      LOGIN
    </button>
      <div class="ui hidden divider"></div>
    </form>

    <div class="ui divider"></div>

    <div class="ui column grid">
      <div class="center aligned column">
        <p>
          Don't have an account? <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  computed: {
    email: {
      get () {
        return this.$store.state.email
      },
      set (value) {
        this.$store.commit('UPDATE_EMAIL', value)
      }
    },
    password: {
      get () {
        return this.$store.state.password
      },
      set (value) {
        this.$store.commit('UPDATE_PASSWORD', value)
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login").then(() => {
        this.$router.push({ path: '/products' });
      });
    }
  }
}
</script>

<style scoped>
.box {
  padding: 30px;
}
</style>
