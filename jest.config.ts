/*
 * Copyright (C) CEDE Labs, SAS - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by CEDE Labs team <team@cedelabs.io>, September 2021
 */

export default {
  preset: "ts-jest",
  extensionsToTreatAsEsm: [".ts"],
  setupFiles: ["dotenv/config"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  globals: {
    "@cedelabs/sdk": {
      useESM: true,
    },
  },
  transformIgnorePatterns: ["node_modules"],
};
