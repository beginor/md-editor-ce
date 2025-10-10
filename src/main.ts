import { defineCustomElement } from 'vue';

import MdEditorCE from './md-editor.ce.vue';

const MdEditorV3 = defineCustomElement(MdEditorCE);

customElements.define('md-editor-v3', MdEditorV3);
