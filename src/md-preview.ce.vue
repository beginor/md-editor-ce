<template>
  <MdPreview :modelValue="text"></MdPreview>
</template>

<script setup>
import { ref, watch } from 'vue';
import { MdPreview, config } from 'md-editor-v3';


// 定义 props
const props = defineProps({
  text: { type: String, default: '' }
});



const text = ref(props.text);

watch(() => props.text, (val) => {
  text.value = val;
});
</script>

<style lang="css">
@import 'md-editor-v3/lib/preview.css';
@import 'highlight.js/styles/atom-one-dark.css';
@import 'katex/dist/katex.min.css';
@import './iconfont.css';
</style>
