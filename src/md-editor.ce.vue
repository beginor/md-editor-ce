<template>
  <MdEditor v-model="text" :toolbars="toolbars" @save="handleSave" @input="handleInput" @blur="handleBlur" @focus="handleFocus" />
</template>

<script setup lang="ts">
import { MdEditor, type ToolbarNames } from 'md-editor-v3';
import { computed } from 'vue';

// 使用 defineModel 定义双向绑定，默认 emit 事件为 'update:text' , angular 应该用不了
const text = defineModel('text', {
  type: String,
  default: '',
});

// setAttribute 只能字符串
const props = defineProps<{
  toolbars?: string;
}>();

const toolbars = computed(() => {
  return props.toolbars?.split(',') as ToolbarNames[];
});

// emit 其他
const emit = defineEmits<{
  onSave: [value: string];
  onBlur: [value: string]; // [event: FocusEvent];
  onFocus: [value: string];
  onInput: [value: string];
}>();

function handleInput() {
  emit('onInput', text.value);
}

function handleSave() {
  emit('onSave', text.value);
}

function handleBlur() {
  emit('onBlur', text.value);
}

function handleFocus() {
  emit('onFocus', text.value);
}
</script>

<style lang="css">
@import 'md-editor-v3/lib/style.css';
@import 'highlight.js/styles/atom-one-dark.css';
@import 'katex/dist/katex.min.css';
@import './iconfont.css';

.md-editor-preview .md-editor-code .md-editor-code-head {
  z-index: 999;
}
</style>
