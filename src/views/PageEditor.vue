<template lang="pug">
  #paged-editor
    RichTextEditor(value="<p>Hello World</p>")
</template>

<script lang="coffee">
import RichTextEditor from '@/components/RichTextEditor'
export default
  name: 'page-editor'
  components: {
    RichTextEditor
  }
</script>

<style lang="sass">

</style>
