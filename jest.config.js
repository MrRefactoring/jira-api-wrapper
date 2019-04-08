module.exports = {
  roots: [
    "<rootDir>/tests"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testMatch: ['<rootDir>/tests/**/*.test.ts', '<rootDir>/tests/**/*.test.js'],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
};
