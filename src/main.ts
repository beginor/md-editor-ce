import { defineCustomElement } from 'vue';

import MdEditorCE from './md-editor.ce.vue';
import MdPreviewCE from './md-preview.ce.vue';

const MdEditorV3 = defineCustomElement(MdEditorCE);

customElements.define('md-editor-v3', MdEditorV3);

const MdPreviewV3 = defineCustomElement(MdPreviewCE);
customElements.define('md-preview-v3', MdPreviewV3);
