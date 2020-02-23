<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    v-model="email"
                  />
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    autocomplete="new-password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click='submitRegister' color="primary">Register</v-btn>
              </v-card-actions>
              <v-alert v-if='error != null' type="error">
                  <div v-html="error" />
              </v-alert>
              <v-alert v-if='success != null' type="success">
                  {{success}}
              </v-alert>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
import AuthenicationService from '../services/AuthenicationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
      success: null
    }
  },
  props: {
    source: String,
  },
  methods: {
    async submitRegister() {
      try {
          await AuthenicationService.register({
          email : this.email,
          password : this.password
        })
        this.error = null
        this.password = ''
        this.email = ''
        this.success = 'Thank you for registering!'
      } catch (error){
        this.error = error.response.data.error
        this.success = null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
