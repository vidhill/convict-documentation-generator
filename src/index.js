const process = require('./process');

const { sampleConfig } = require('./sample-convict-config');

const titleMap = {
    env: 'Environment Variable',
    format: 'Format',
    doc: 'Description',
    default: 'Default Variable',
};

const headingsArray = ['env', 'format', 'doc', 'default'];

const markdown = process(sampleConfig, titleMap, headingsArray);

// eslint-disable-next-line no-console
console.log(markdown);
