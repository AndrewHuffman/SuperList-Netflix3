module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'globals': {
    'GM_addStyle': true,
    'jQuery': true,
    '$': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    "ident": 0,
    'space-before-function-paren': 'off',
    'key-spacing': [0,
      {
        'align': {
          'beforeColon': true,
          'afterColon': true,
          'on': 'colon'
        },
        'singleLine': {
          'beforeColon': false,
          'afterColon': true
        },
        'multiLine': {
          'beforeColon': true,
          'afterColon': true,
          'align': 'colon'
        }
      }],
    'no-multi-spaces': ['warn',
      {
        'exceptions': {
          'VariableDeclarator': true
        }
      }
    ]
  }
};
