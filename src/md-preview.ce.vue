<script setup lang="ts">
import { ref, watch, defineComponent } from 'vue';
import { MdPreview, config } from 'md-editor-v3';
import screenfull from 'screenfull';
import katex from 'katex';
import Cropper from 'cropperjs';
import mermaid from 'mermaid';
import highlight from 'highlight.js';

// >=3.0
import * as prettier from 'prettier';
import parserMarkdown from 'prettier/plugins/markdown';
import * as echarts from 'echarts';

// 定义 props
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
});

// config({
//     iconfontType: 'class',
// });

const text = ref(props.text);

watch(() => props.text, (val) => {
  text.value = val;
});
</script>

<template>
  <MdPreview :modelValue="text"></MdPreview>
</template>

<style lang="css">
@import '../node_modules/md-editor-v3/lib/preview.css';
@import '../node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/styles/atom-one-dark.css';
@import '../node_modules/.pnpm/katex@0.16.23/node_modules/katex/dist/katex.min.css';
@import './iconfont.css';
</style>
