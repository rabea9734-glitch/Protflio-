// Circular serialization safety guard
const _nativeStringify = JSON.stringify;
JSON.stringify = function (value: any, replacer?: any, space?: any) {
  const seen = new WeakSet();
  function safeReplacer(key: string, val: any) {
    if (typeof val === 'object' && val !== null) {
      if (val === window || (typeof Window !== 'undefined' && val instanceof Window)) {
        return '[Window]';
      }
      if (typeof Document !== 'undefined' && val instanceof Document) {
        return '[Document]';
      }
      if (typeof Element !== 'undefined' && val instanceof Element) {
        return `[Element: ${val.tagName || 'node'}]`;
      }
      if (seen.has(val)) {
        return '[Circular]';
      }
      seen.add(val);
    }
    if (typeof replacer === 'function') {
      return replacer.call(this, key, val);
    }
    return val;
  }
  try {
    return _nativeStringify(value, typeof replacer === 'function' ? safeReplacer : (replacer || safeReplacer), space);
  } catch {
    try {
      return _nativeStringify(value, safeReplacer, space);
    } catch {
      return '"{Circular Object}"';
    }
  }
};

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
