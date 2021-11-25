import defaultConfig from './default';
import prodConfig from './prod';
import testConfig from './test';

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const config = __DEV__
  ? { ...defaultConfig }
  : ((!isBrowser && global.__TEST__) || (isBrowser && !!window.__TEST__))
    ? { ...defaultConfig, ...testConfig }
    : { ...defaultConfig, ...prodConfig };

export default config;
