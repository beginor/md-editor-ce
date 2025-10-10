import { defineCustomElement } from 'vue';

import MdEditorCE from './md-editor.ce.vue';
import { mdConfig } from './md-config'

mdConfig();

customElements.define(
    'md-editor-v3',
    defineCustomElement(MdEditorCE)
);
