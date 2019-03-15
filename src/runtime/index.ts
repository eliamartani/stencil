import * as d from '../declarations';
import { BUILD } from '@build-conditionals';

export { bootstrapLazy } from './bootstrap-lazy';
export { connectedCallback } from './connected-callback';
export { createEvent } from './event-emitter';
export { disconnectedCallback } from './disconnected-callback';
export { getAssetPath } from './get-asset-path';
export { getConnect } from './connect';
export { getDocument, getElement, getWindow } from './element';
export { h, Host } from './vdom/h';
export { proxyNative, proxyComponent } from './proxy-component';
export { renderVdom } from './vdom/render';
export { setMode, getMode } from './mode';

export const Build: d.UserBuildConditionals = {
  isDev: BUILD.isDev
};