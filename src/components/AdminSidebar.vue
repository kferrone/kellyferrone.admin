<template lang="pug">
#menu
  .pure-menu
    a.pure-menu-heading(href="#") {{title}}
    ul.pure-menu-list
      li.pure-menu-item(
        class="menu-item-divided"
        :class="isSelected('/')")
        router-link.pure-menu-link(to="/") Dashboard
      li.pure-menu-item(
        class="menu-item-divided"
        :class="isSelected('/pages')")
        router-link.pure-menu-link(to="/pages") Pages
      li.pure-menu-item
        button.pure-button(
          @click="logout()"
        ) Logout
</template>

<script lang="coffee">
import firebase from 'firebase'
export default
  name: 'admin-sidebar'
  props:
    title: ''
  methods:
    isSelected: (path) ->
      'pure-menu-selected': @$route.path == path
    logout: ->
      firebase.auth().signOut()
</script>

<style lang="sass">

</style>
