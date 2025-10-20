<template>
  <MdEditor ref="editorRef" :id="editorId" v-model="text" :toolbars="toolbars" @save="handleSave"
    @input="handleInput" @blur="handleBlur" @focus="handleFocus" @html-changed="handleHtmlChanged">
  </MdEditor>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { MdEditor, type ToolbarNames } from 'md-editor-v3';

const text = defineModel<string>('text', { default: '' });

const editorRef = ref<InstanceType<typeof MdEditor>>();

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
  editorSave: [value: string, Promise<string>];
  editorBlur: [value: string]; // [event: FocusEvent];
  editorFocus: [value: string];
  editorInput: [value: string];
  editorHtmlChanged: [html: string];
}>();

function handleInput() {
  emit('editorInput', text.value);
}

// angular 里变成了ZoneAwarePromise，state null，then、catch finally 都没反应.......
// https://www.codingrequired.com/post/angular-zone-js-is-bad
// async function handleSave(text: string, promise: Promise<string>): Promise<void> {
//   try {
//     console.log('handleSave generating HTML start ...');
//     const html = await promise;
//     console.log('handleSave generated HTML end ...');
//     emit('editorSave', text, html);
//   } catch (error) {
//     console.error('handleSave Error generating HTML:', error);
//   }
// }

function handleSave(text: string, promise: Promise<string>): void {
  emit('editorSave', text, promise);
}

function handleBlur() {
  emit('editorBlur', text.value);
}

function handleFocus() {
  emit('editorFocus', text.value);
}

function getEditorInstance() {
  return editorRef.value;
}

function handleHtmlChanged(html: string) {
  emit('editorHtmlChanged', html);
}

defineExpose({
  getEditorInstance
});
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
