<template>
  <MdEditor :id="editorId" v-model="text" :toolbars="toolbars" @save="handleSave"
    @input="handleInput" @blur="handleBlur" @focus="handleFocus">
  </MdEditor>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MdEditor, type ToolbarNames } from 'md-editor-v3';

const text = defineModel<string>('text', { default: '' });

const props = defineProps<{ toolbars?: string; id?: string; }>();

const toolbars = computed(() => {
  return props.toolbars?.split(',') as ToolbarNames[];
});

const editorId = computed(() => {
    if (props.id) {
        return props.id;
    }
    return `editor-${Date.now().toString(16)}-${Math.random().toString(16).substring(2)}`;
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
@import 'highlight.js/styles/github-dark.css';
@import 'katex/dist/katex.min.css';
@import './iconfont.css';

.md-editor-preview .md-editor-code .md-editor-code-head {
  z-index: 999 !important;
}
</style>
