<template lang="pug">
  form#login(class="pure-form pure-form-stacked")
    fieldset
      legend Sign In
      label(for="email") Email
      input#email(
        type="email"
        placeholder="Email"
        v-model="email"
      )
      label(for="password")
      input#password(
        type="password"
        placeholder="Password"
        v-model="password"
      )
      label.pure-checkbox(for="remember") Remember Me
        input#remember(type="checkbox")
      button(
        @click="login"
        type="button"
      ) Submit
</template>

<script lang="coffee">
import firebase from 'firebase'
export default
  name: 'login'
  data: ->
    email: null
    password: null
  methods:
    login: ->
      firebase.auth()
              .signInWithEmailAndPassword(@email,@password)
              .then(
                (user) =>
                  console.log('Logged in with', user)
                  @$router.replace('/')
              )
              .catch(
                (error) =>
                  console.error(error)
              )
</script>