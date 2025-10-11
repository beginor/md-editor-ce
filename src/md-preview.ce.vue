<template>
  <MdPreview :id="previewId" :modelValue="text"></MdPreview>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MdPreview } from 'md-editor-v3';

const props = defineProps<{ text: string, id: string }>();

const previewId = computed(() => {
    if (props.id) {
        return props.id;
    }
    return `preview-${Date.now().toString(16)}-${Math.random().toString(16).substring(2)}`;
});
</script>

<style lang="css">
@import 'md-editor-v3/lib/preview.css';
@import 'highlight.js/styles/github-dark.css';
@import 'katex/dist/katex.min.css';
@import './iconfont.css';

.md-editor-preview .md-editor-code .md-editor-code-head {
  z-index: 999 !important;
}
</style>
