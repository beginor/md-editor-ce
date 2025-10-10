<template>
  <MdPreview :modelValue="text"></MdPreview>
</template>

<script setup lang="ts">
import { MdPreview } from 'md-editor-v3';

const props = defineProps({
  text: { type: String, default: '' }
});
</script>

<style lang="css">
@import 'md-editor-v3/lib/preview.css';
@import 'highlight.js/styles/atom-one-dark.css';
@import 'katex/dist/katex.min.css';
@import './iconfont.css';

.md-editor-preview .md-editor-code .md-editor-code-head {
  z-index: 999;
}
</style>
