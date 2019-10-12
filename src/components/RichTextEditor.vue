<template lang="pug">
	#rich-text-editor
		#editor.editor(
			ref="editor"
			:v-html="value"
		)
</template>
<script lang="coffee">
# import Quill from 'quill'
import Quill from '../lib/quill.js';
export default
  name: 'rich-text-editor'
  props:
    value:
      type: String
      default: ''
  data: ->
    editor: null
  mounted: ->
    @editor = new Quill(@$refs.editor,
      theme: 'snow'
    )
    @editor.root.innerHTML = @value
    @editor.on('text-change', ->);
</script>
<style lang="sass">
@import '~quill/dist/quill.core.css'
@import '~quill/dist/quill.snow.css'
</style>
