<template>
    <div id="login" class="box has-text-centered">
        <h2 class="title">VUE STORE</h2>
        <form @submit.prevent="signup">
        <!-- First Name Field -->
        <div class="field">
            <label class="label">First Name</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="firstname" class="input" type="text" required placeholder="First Name">
                <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                </span>
            </div>
        </div>
        <!-- Last Name Field -->
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="lastname" class="input" type="text" required placeholder="Last Name">
                <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                </span>
            </div>
        </div>
        <!-- Email Field -->
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="email" class="input" type="email" placeholder="Email" required>
                <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
            </div>
        </div>
        <!-- Phone Field -->
        <div class="field">
            <label class="label">Phone</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="phone" class="input" type="tel" placeholder="Phone" required>
                <span class="icon is-small is-left">
                    <i class="fa fa-phone"></i>
                </span>
            </div>
        </div>
        <!-- Password Field -->
        <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="password" class="input" type="password" placeholder="Password" required>
                <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
            </div>
        </div>
        <!-- Re-type Password Field -->
<!--        <div class="field">-->
<!--            <label class="label">Re-type Password</label>-->
<!--            <div class="control has-icons-left has-icons-right">-->
<!--                <input v-model="password" class="input" type="password" placeholder="Password">-->
<!--                <span class="icon is-small is-left">-->
<!--          <i class="fa fa-lock"></i>-->
<!--        </span>-->
<!--            </div>-->
<!--        </div>-->
        <button class="button is-link">
            SignUp
        </button>
            <div class="ui hidden divider"></div>
        </form>

        <div class="ui divider"></div>

        <div class="ui column grid">
            <div class="center aligned column">
                <p>
                    Got an account? <router-link to="/login">Log In</router-link>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    // import { mapGetters } from 'vuex';

    export default {
        name: 'SignUp',
        computed: {
            firstname: {
                get () {
                    return this.$store.state.firstname
                },
                set (value) {
                    this.$store.commit('UPDATE_FIRSTNAME', value)
                }
            },
            lastname: {
                get () {
                    return this.$store.state.lastname
                },
                set (value) {
                    this.$store.commit('UPDATE_LASTNAME', value)
                }
            },
            email: {
                get () {
                    return this.$store.state.email
                },
                set (value) {
                    this.$store.commit('UPDATE_EMAIL', value)
                }
            },
            phone: {
                get () {
                    return this.$store.state.phone
                },
                set (value) {
                    this.$store.commit('UPDATE_PHONE', value)
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
            signup() {
                this.$store.dispatch("signup").then(() => {
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
