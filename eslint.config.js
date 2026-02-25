const js = require("@eslint/js")
const react = require("eslint-plugin-react")
const prettier = require("eslint-plugin-prettier")
const prettierConfig = require("eslint-config-prettier")
const babelParser = require("@babel/eslint-parser")
const globals = require("globals")

module.exports = [
	js.configs.recommended,
	{
		files: ["**/*.js", "**/*.jsx"],
		plugins: {
			react,
			prettier,
		},
		languageOptions: {
			parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					presets: ["next/babel"],
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2015,
			},
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...react.configs.recommended.rules,
			"react/jsx-closing-bracket-location": ["error", "after-props"],
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"prettier/prettier": "error",
		},
	},
	prettierConfig,
]
