
/**
 * @jest-environment jsdom
 */

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|less|scss\\?module)$": "<rootDir>/__mocks__/cssMock.js",
  },
};
