<template>
  <div>
    <h1>Welcome to the Register Page!</h1>
    <input
    type='email'
    name='email'
    placeholder="email"
    v-model='email'
    />
    <br>
    <input
    type='password'
    name='password'
    placeholder="password"
    v-model='password'
    />
    <br>
    <button @click='submitRegister'>Register</button>
  </div>
</template>

<script>
import axios from 'axios'
import AuthenicationService from '../services/AuthenicationService'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submitRegister() {
      await AuthenicationService.register({
        email : this.email,
        password : this.password
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
