/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  env: {
    node: true,
    browser: true
  },
  ignorePatterns: [
    'package-lock.json',
    'node_modules/',
    'dist/'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'header',
    'json'
  ],
  overrides: [
    {
      files: [ '**/*.json' ],
      rules: {
        // no copyright headers in json files
        'header/header': 'off'
      }
    },
    {
      files: [ '**/*.test.*' ],
      rules: {
        // max function length (without blanks and comments)
        'max-lines-per-function': [ 'warn', { 'max': 35, 'skipBlankLines': true, 'skipComments': true } ],

        // max statements per function
        'max-statements': [ 'warn', { 'max': 15 } ]
      }
    }
  ]
};
