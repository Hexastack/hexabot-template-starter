/*
 * Copyright © 2025 Hexastack. All rights reserved.
 *
 * This file is part of the Hexabot starter template.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 *
 * IMPORTANT: If you use this starter template for your own projects, please update this license header to reflect your own license details.
 *
 * Replace this header with your own copyright and license information to ensure compliance with your chosen license.
 */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  rootDir: './',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        diagnostics: false,
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/node_modules/hexabot/src/$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!hexabot)/'],
};
