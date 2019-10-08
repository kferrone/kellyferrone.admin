<template lang="pug">
#menu
  .pure-menu
    a.pure-menu-heading(href="#") {{title}}
    ul.pure-menu-list
      li.pure-menu-item
        router-link.pure-menu-link(to="/") Dashboard
      li.pure-menu-item(class="menu-item-divided pure-menu-selected")
        a.pure-menu-link(href="") Pages
</template>

<script lang="coffee">
export default
  name: 'sidebar'
  props:
    title: ''
</script>

<style lang="sass">

</style>
