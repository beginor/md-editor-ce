import { defineCustomElement } from 'vue';

import MdEditorCE from './md-editor.ce.vue';
import MdPreviewCE from './md-preview.ce.vue';

customElements.define(
    'md-editor-v3',
    defineCustomElement(MdEditorCE)
);

customElements.define(
    'md-preview-v3',
    defineCustomElement(MdPreviewCE)
);
