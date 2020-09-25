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
  // strict
  'strict': [ 'error', 'global' ],

  // disallow duplicated keys
  'json/duplicate-key': 'error',

  // license header
  'header/header': [
    'error',
    'block',
    [
      '',
      {
        pattern: ' * Copyright \\d{4} Adobe\\. All rights reserved\\.',
        template: ' * Copyright 2020 Adobe. All rights reserved.'
      },
      ' * This file is licensed to you under the Apache License, Version 2.0 (the "License");',
      ' * you may not use this file except in compliance with the License. You may obtain a copy',
      ' * of the License at http://www.apache.org/licenses/LICENSE-2.0',
      ' *',
      ' * Unless required by applicable law or agreed to in writing, software distributed under',
      ' * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS',
      ' * OF ANY KIND, either express or implied. See the License for the specific language',
      ' * governing permissions and limitations under the License.',
      ' ',
    ]
  ],

  // one statement per line
  'max-statements-per-line': [ 'error', { max: 1 } ],

  // allow '_' to be unused
  'no-unused-vars': [ 'error', { argsIgnorePattern: '^_$', } ],

  // space in backets: [ 1, 2 ]
  'array-bracket-spacing': [ 'warn', 'always', { 'singleValue': true } ],

  // space separated elements: [ 1, 2 ]
  'comma-spacing': [ 'warn', { 'before': false, 'after': true } ],

  // no space before colon: { foo: 1 }
  'key-spacing': [ 'warn', { 'beforeColon': false } ],

  // single spacing in statements
  'no-multi-spaces': 'warn',

  // no trailing spaces
  'no-trailing-spaces': 1,

  // spaces in curly brackets: { foo: 1 }
  'object-curly-spacing': [ 'warn', 'always' ],

  // spaces in blocks: { bar = 0; }
  'block-spacing': [ 'warn', 'always' ],

  // space before {}: try {} catch(a) {}
  'space-before-blocks': [ 'warn', 'always' ],

  // function paren spacing
  'space-before-function-paren': [
    'warn',
    {
      // no space for anonymous function: let a = function() {}
      'anonymous': 'never',

      // no space for named function: function foo() {}
      'named': 'never',

      // space for async arrow function: async () => {}
      'asyncArrow': 'always'
    }
  ],

  // arrow function spacing
  'arrow-spacing': [ 'warn', { 'before': true, 'after': true } ],

  // function call parens
  'func-call-spacing': [ 'warn', 'never' ],

  // single quotes or backticks: 'foo', `bar`
  'quotes': [ 'warn', 'single', { 'allowTemplateLiterals': true } ],

  // no space before semicolon, space after semicolon in case there is another statement
  'semi-spacing': [ 'warn', { 'before': false, 'after': true } ],

  // semicolon at the end of statement
  'semi': [ 'warn', 'always' ],

  // if (foo) { ... } else if (bar) { ... }
  'keyword-spacing': [ 'error', { 'before': true } ],

  // no space in computed statements: array[element]
  'computed-property-spacing': [ 'error', 'never' ],

  // no space in parens: foo('a', 'b')
  'space-in-parens': [ 'warn', 'never' ],

  // space around infix operators: foo = 'bar';
  'space-infix-ops': 'warn',

  // empty lines
  'padding-line-between-statements': [
    'warn',

    // before `return`
    { 'blankLine': 'always', 'prev': '*', 'next': 'return' },

    // before a block
    { 'blankLine': 'always', 'prev': '*', 'next': 'block' },

    // after a block
    { 'blankLine': 'always', 'prev': 'block', 'next': '*' },

    // after function, class
    { 'blankLine': 'always', 'prev': [ 'function', 'class' ], 'next': '*' },

    // before function, class
    { 'blankLine': 'always', 'prev': '*', 'next': [ 'function', 'class' ] },

    // after declarations
    { 'blankLine': 'always', 'prev': [ 'const', 'let', 'var' ], 'next': '*' },

    // before declarations
    { 'blankLine': 'always', 'prev': '*', 'next': [ 'const', 'let', 'var' ] },

    // optionally between declarations
    { 'blankLine': 'any', 'prev': [ 'const', 'let', 'var' ], 'next': [ 'const', 'let', 'var' ] }
  ],

  // one empty line between statements, one empty line at the end of the file
  'no-multiple-empty-lines': [ 'warn', { 'max': 1, 'maxEOF': 0 } ],

  // no extra parens
  'no-extra-parens': [
    'warn',
    'all',
    {
      // except for returns: return (foo === 1) ? bar : (bar - 10)
      'returnAssign': false,

      // except for sequence expressions: (a + b) > c
      enforceForSequenceExpressions: false,

      // except for binary expressions: a || (b && c)
      'nestedBinaryExpressions': false,

      // except for function prototype methods: (function () {}).call()
      'enforceForFunctionPrototypeMethods': false,

      // except for arrow functions:
      'enforceForArrowConditionals': false
    }
  ]
};
