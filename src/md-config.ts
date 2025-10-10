import { config } from 'md-editor-v3';

import screenfull from 'screenfull';
import katex from 'katex';
import Cropper from 'cropperjs';
import mermaid from 'mermaid';
import highlight from 'highlight.js';
import * as prettier from 'prettier';
import parserMarkdown from 'prettier/plugins/markdown';
import * as echarts from 'echarts';

export function mdConfig() {
    config({
        iconfontType: 'class',
        editorExtensions: {
            prettier: {
                prettierInstance: prettier,
                parserMarkdownInstance: parserMarkdown
            },
            highlight: {
                instance: highlight
            },
            screenfull: {
                instance: screenfull
            },
            katex: {
                instance: katex
            },
            cropper: {
                instance: Cropper
            },
            mermaid: {
                instance: mermaid
            },
            echarts: {
                instance: echarts
            }
        }
    });
}
