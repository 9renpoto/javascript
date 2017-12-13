export const config = {
  framework: 'mocha',
  capabilities: {
    browserName: 'chrome'
  },
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec',
    timeout: 10000
  },
  specs: ['test/*.test.ts'],
  directConnect: true,
  noGlobals: true
}
