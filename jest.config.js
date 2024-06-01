module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    }
  };
  