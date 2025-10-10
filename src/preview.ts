import { defineCustomElement } from 'vue';

import MdPreviewCE from './md-preview.ce.vue';
import { mdConfig } from './md-config.ts';

mdConfig();

customElements.define(
    'md-preview-v3',
    defineCustomElement(MdPreviewCE)
);
