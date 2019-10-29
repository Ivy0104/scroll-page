/**
 ** ********************************************************
 ** @file .eslintrc.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2017-12-13 13:59:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-21 14:50:07
 ** @requires https://www.npmjs.com/package/eslint
 ** @requires https://www.npmjs.com/package/babel-eslint
 ** @requires https://www.npmjs.com/package/eslint-import-resolver-webpack
 ** @requires https://www.npmjs.com/package/eslint-config-airbnb-base
 ** @requires https://www.npmjs.com/package/eslint-plugin-html
 ** @requires https://www.npmjs.com/package/eslint-plugin-import
 ** @requires https://www.npmjs.com/package/eslint-plugin-vue
 ** @tutorial https://eslint.org/docs/user-guide/configuring
 ** @example
 ** glbaols字段调整，根据项目开发环境添加或删除全局变量，例如：globals: {
 **   jQuery: true
 ** }
 ** @example
 ** settings字段调整，配置webpack配置文件的路径，例如：settings: {
 **  "import/resolver": {
 **     webpack: { config: require("./xxx/webpack-config") }
 **   }
 ** }
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended'],

  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8
  },

  // incompatible with eslint-plugin-vue
  // plugins: ['html'],

  env: {
    browser: true
  },

  globals: {
    Vue: true,
    CAMELCASE: true,
    KEBABCASE: true
  },

  settings: {
    'import/resolver': {
      webpack: { config: require('./launcher/webpack-base') }
    }
  },

  rules: {
    // possible errors
    'no-cond-assign': ['error', 'except-parens'],
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : 'off',
    'no-constant-condition': 'error',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: true,
        ignoreJSX: 'none',
        enforceForArrowConditionals: false
      }
    ],
    'no-sparse-arrays': 'off',
    'valid-jsdoc': 'error',

    // best practices
    'accessor-pairs': ['error', { setWithoutGet: true }],
    complexity: ['error', 10],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'always' }],
    'no-alert': 'error',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-eq-null': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        allow: ['!!', '~', '+']
      }
    ],
    'no-invalid-this': 'error',
    'no-new': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': ['error', { props: true }],
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false
      }
    ],
    'no-useless-call': 'error',
    'no-void': 'off',
    'prefer-promise-reject-errors': 'off',
    radix: ['error', 'as-needed'],
    'require-await': 'error',
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],

    // nodejs and commonjs
    'global-require': 'off',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'no-process-exit': 'error',

    // variables
    'no-shadow': [
      'error',
      { builtinGlobals: false, hoist: 'functions', allow: [] }
    ],

    // stylistic issues
    'comma-dangle': ['error', 'never'],
    'consistent-this': ['error', 'that', 'self', 'me', '_this'],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'function-paren-newline': ['error', 'consistent'],

    // off rule "indent" to compatible with vue/script-indent initial indentation
    indent: [
      'off',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 0,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: ['JSXElement', 'JSXElement *']
      }
    ],
    'indent-legacy': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 0,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1
      }
    ],
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '@.*',
        applyDefaultPatterns: true
      }
    ],
    'linebreak-style': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false }
    ],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      80,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false
      }
    ],
    'max-lines': [
      'error',
      {
        max: 2000,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 3],
    'max-statements': ['error', 80],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-bitwise': ['error', { allow: ['~'], int32Hint: true }],
    'no-mixed-operators': 'off',
    'no-negated-condition': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 10,
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          minProperties: 10,
          multiline: true,
          consistent: true
        }
      }
    ],
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always'
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-infix-ops': ['error', { int32Hint: false }],

    // ecmascript 6
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: false,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false
      }
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true
      }
    ],

    // eslint-plugin-import static analysis
    'import/no-dynamic-require': 'off',
    'import/no-webpack-loader-syntax': 'off',
    // eslint-plugin-import hasn't released rule 'import/no-self-import'
    // 'import/no-self-import': 'error',

    // eslint-plugin-import helpful warnings
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],

    // eslint-plugin-import style guide
    'import/exports-last': 'error',
    'import/extensions': [
      'error',
      'always',
      { js: 'never', jsx: 'never', vue: 'never' }
    ],
    'import/prefer-default-export': 'off',
    'import/group-exports': 'off',

    // eslint-plugin-vue strongly recommended
    'vue/html-end-tags': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always'
        },
        svg: 'never',
        math: 'never'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],

    // eslint-plugin-vue uncategorized
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    'vue/prop-name-casing': ['error', 'camelCase']
  }
};
