/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@electron-toolkit',
    '@vue/eslint-config-prettier',
    'prettier', // 确保 ESLint 支持并遵循 Prettier 的规则
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
  // ESLint 配置中添加对 Prettier 的自定义规则
  prettier: {
    singleQuote: true, // 使用单引号代替双引号
    semi: true, // 在每行代码末尾添加分号
    printWidth: 100, // 设置代码的最大打印宽度为100个字符
    trailingComma: 'all', // 在多行对象或数组的最后一项后面添加逗号
    // 在对象大括号内不添加空格
    bracketSpacing: false,
  },
};
