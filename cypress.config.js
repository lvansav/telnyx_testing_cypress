const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "grhwz3",
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'https://telnyx.com',
    pageLoadTimeout: 120000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    'runMode': 3,
    'openMode': 3
  }
});
