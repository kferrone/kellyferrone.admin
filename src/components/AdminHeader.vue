<template lang="pug">
.header
  h1 {{title}}
  h2 {{subTitle}}
</template>

<script lang="coffee">
export default
  name: 'admin-header'
  props:
    title: ''
    subTitle: ''
</script>

<style lang="sass">

</style>
