// module.exports = {
//     env: {
//       browser: true,
//       es6: true,
//       node: true,
//     },
//     extends: [
//       // "eslint:recommended",
//       // "plugin:react/recommended",
//       // "plugin:@typescript-eslint/recommended",
//       // "plugin:prettier/recommended"
//       // 'airbnb-typescript',
//       // 'prettier',
//       'plugin:prettier/recommended',
//       // 'plugin:jest/recommended',
//       // 'plugin:import/recommended',
//     ],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//       ecmaFeatures: {
//         jsx: true,
//       },
//       project: './tsconfig.json',
//     },
//     plugins: ['react','@typescript-eslint', 'prettier'],
//     settings: {
//       'import/resolver': {
//         node: {
//           extensions: ['.js', '.jsx', '.ts', '.tsx'],
//         },
//       },
//     },
//     overrides: [
//       {
//         files: ['**/*.ts', '**/*.tsx'],
//         parser: '@typescript-eslint/parser',
//         rules: {
//           'no-undef': 'off',
//         },
//       },
//     ],
//     rules: {
//       "no-var": "error",
//       // 关闭react默认的props-type验证
//       'react/prop-types': [0],
//       // 关闭使用解构赋值的检测
//       'react/destructuring-assignment': [0, 'always'],
//       'react/jsx-closing-bracket-location': [0],
//       'react/jsx-one-expression-per-line': 'off',
//       'react/jsx-props-no-spreading': 'off',
//       'jsx-a11y/anchor-is-valid': 'off',
//       'jsx-a11y/click-events-have-key-events': 'off',
//       'jsx-a11y/no-noninteractive-element-interactions': 'off',
//       'no-console': [0],
//       'no-unused-vars': 'off',
//       'no-continue': 'off',
//       'no-unused-expressions': 'off',
//       'class-methods-use-this': 'off',
//       'no-restricted-syntax': 'off',
//       'guard-for-in': 'off',
//       // 解决require报错问题
//       // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
//       // 'import/no-extraneous-dependencies': [
//       //   'error',
//       //   { devDependencies: false, optionalDependencies: false, peerDependencies: false },
//       // ],
//       // 'import/no-extraneous-dependencies': 'off',
//       // 'import/no-unresolved': [2, { ignore: ['antd'] }],
//       'import/no-named-as-default-member': 'off',
//       'max-classes-per-file': ['error', 10],
//       'no-plusplus': 'off',
//       'jsx-a11y/no-static-element-interactions': 'off',
//       'react/state-in-constructor': 'off',
//       'react/jsx-curly-newline': 'off',
//       'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
//     },
//   };

module.exports = {
	root: true, // ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找
	settings: { 
		react: {
			version: "detect"
		}
	},
	env: {
		browser: true, // 浏览器环境中的全局变量
		node: true, // Node.js 全局变量和 Node.js 作用域
		es6: true // 启用除了 modules 以外的所有 ECMAScript 6 特性
	},
	/* 指定如何解析语法 */
	parser: "@typescript-eslint/parser",  // 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用
	/* 优先级低于 parse 的语法解析配置 */
	parserOptions: {
		ecmaVersion: 2020, // 指定使用的 ECMAScript 版本
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {  // 使用额外的语言特性
			jsx: true
		}
	},
	// 第三方插件，使用之前必须安装
	plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
	/* 继承某些已有的规则 */
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
		"plugin:prettier/recommended",
		// "plugin:import/recommended"
	],
	/*
	 * "off" 或 0    ==>  关闭规则
	 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
	 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
	 */
	rules: {
		"no-console": [0],
		// eslint (http://eslint.cn/docs/rules)
		"no-var": "error", // 要求使用 let 或 const 而不是 var
		"no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
		"no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
		"prefer-const": "off", // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		"no-irregular-whitespace": "off", // 禁止不规则的空白

		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
		"@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
		"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
		"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
		// "@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
		"@typescript-eslint/ban-types": "off", // 禁止使用特定类型
		"@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
		"@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
		"@typescript-eslint/no-empty-function": "off", // 禁止空函数
		"@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
		"@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
		"@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
		"@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型

		// react (https://github.com/jsx-eslint/eslint-plugin-react)
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "off"
	}
};
