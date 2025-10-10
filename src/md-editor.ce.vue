<template>
  <MdEditor v-model="text" />
</template>

<script setup>

import { ref, watch } from 'vue';
import { MdEditor } from 'md-editor-v3';

const props = defineProps({
  text: { type: String, default: '' }
});

const text = ref(props.text);

watch(() => props.text, (val) => {
  text.value = val;
});
</script>

<style lang="css">
@import 'md-editor-v3/lib/style.css';
@import 'highlight.js/styles/atom-one-dark.css';
@import 'katex/dist/katex.min.css';
@import './iconfont.css';
</style>
