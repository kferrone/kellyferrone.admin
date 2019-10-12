<template lang="pug" >
#layout
  template(v-if="user")
    a#menuLink.menu-link(href="#menu")
      span
    AdminSidebar(title="Admin")
    #main
      AdminHeader(
        title="Foo"
        subTitle="Bar"
      )
      section.content
        router-view
  template(v-else)
    Login
</template>

<script lang="coffee">
import AdminSidebar from '@/components/AdminSidebar.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import Login from '@/components/Login.vue'
import firebase from 'firebase'
export default
  name: 'app'
  components: {
    AdminSidebar
    AdminHeader
    Login
  }
  data: ->
    title: "Admin"
    user: null
  mounted: ->
    @user = firebase.auth().currentUser
    firebase.auth().onAuthStateChanged(
      (user) =>
        @user = user
    )
</script>

<style lang="sass">
#app
  padding: 0
</style>
