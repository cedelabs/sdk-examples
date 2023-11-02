export default {
  preset: "ts-jest",
  extensionsToTreatAsEsm: [".ts"],
  setupFiles: ["./setupTests.ts", "dotenv/config"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testEnvironment: process.env.TEST_ENV ?? "node",
  transform: {
    "\\.[jt]sx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  globals: {
    "@cedelabs/sdk-demo": {
      useESM: true,
    },
  },
  transformIgnorePatterns: ["node_modules"],
};
