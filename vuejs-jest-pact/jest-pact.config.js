const config = require('./jest.config');
module.exports = {...config,
  testMatch: [
    '**/tests/unit/**/*.pact.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
}
