<template lang="pug" >
#layout
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
</template>

<script lang="coffee">
import AdminSidebar from '@/components/AdminSidebar.vue'
import AdminHeader from '@/components/AdminHeader.vue'
export default
  name: 'app'
  components: {
    AdminSidebar
    AdminHeader
  }
  data: ->
    title: "Admin"
    authenticated: false
</script>

<style lang="sass">
#app
  padding: 0
</style>
