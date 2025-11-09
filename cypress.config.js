const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // your client app URL
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
  },
});